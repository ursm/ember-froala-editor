import { getOwner } from '@ember/application';
import { assert } from '@ember/debug';
import { action } from '@ember/object';
import { assign } from '@ember/polyfills';
import { isHTMLSafe, htmlSafe } from '@ember/template';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import FroalaEditor from 'froala-editor';


export function captureEditorWrapper(callbackFunction, ...partial) {
  assert(
    '<FroalaEditor> captureEditorWrapper() requires a function as the first argument',
    typeof callbackFunction === 'function'
  );
  return function captureEditor(...args) {
    return callbackFunction(this, ...partial, ...args);
  };
}


export default class FroalaEditorComponent extends Component {


  defaultOptions = {};


  defaultEventCallbacks = {};


  @tracked content = null;


  editor = null;


  get fastboot() {
    return getOwner(this).lookup('service:fastboot');
  }


  get fastbootContent() {
    return (
      isHTMLSafe(this.args.content) ?
      this.args.content :
      htmlSafe(this.args.content)
    );
  }


  get argumentOptions() {
    let options = {};
    for (let argumentName in this.args) {
      if (FroalaEditor.DEFAULTS.hasOwnProperty(argumentName)) {
        options[argumentName] = this.args[argumentName];
      }
    }
    return options;
  }


  get argumentEventCallbacks() {
    let callbacks = {};

    // Regex's used for replacing things in the name
    const regexOnOrHtml = /^on-/g;
    const regexHyphens  = /-/g;
    const regexDots     = /\./g;

    for (let argumentName in this.args) {

      // Only names that start with on- are callbacks
      if (argumentName.indexOf('on-') !== 0) {
        continue;
      }

      assert(
        `<FroalaEditor> @${argumentName} event callback argument must be a function`,
        typeof this.args[argumentName] === 'function'
      );

      // Convert the name to what the event name would be
      let eventName = argumentName;
      eventName = eventName.replace(regexOnOrHtml, '');
      eventName = eventName.replace(regexHyphens, '.');

      // Special use case for the 'popups.hide.[id]' event
      // Ember usage would be '@on-popups-hide-id=(fn)'
      // https://www.froala.com/wysiwyg-editor/docs/events#popups.show.[id]
      if (eventName.indexOf('popups.hide.') === 0) {
        let id = eventName.replace('popups.hide.', '');
        id = id.replace(regexDots, '-'); // Convert back to hyphens
        eventName = `popups.hide.[${id}]`;
      }

      // Wrap the callback to pass the editor in as the first argument
      callbacks[eventName] = this.args[argumentName];

    }

    return callbacks;
  }


  get combinedOptions() {
    let config = getOwner(this).resolveRegistration('config:environment');
    return assign(
      {},
      config['ember-froala-editor'],
      this.defaultOptions,
      this.args.options,
      this.argumentOptions
    );
  }


  get combinedCallbacks() {
    return assign(
      {},
      this.defaultEventCallbacks,
      this.argumentEventCallbacks
    );
  }


  get optionsWithInitEvent() {
    let options = this.combinedOptions;

    // Determine which event will be called first
    let initEventName = (
      this.combinedOptions.initOnClick ?
      'initializationDelayed' :
      'initialized'
    );

    // Ensure the events object exists
    options.events = options.events || {};

    // Add the created callback to the proper initialization event
    options.events[initEventName] = captureEditorWrapper(this.createdEditor, initEventName);

    return options;
  }


  constructor(owner, args) {
    super(owner, args);

    assert(
      '<FroalaEditor> @content agrument must be a string or SafeString from htmlSafe()',
      (typeof args.content === 'string' || typeof args.content === 'undefined' || isHTMLSafe(args.content))
    );
    assert(
      '<FroalaEditor> @options argument must be an object',
      (typeof args.options === 'object' || typeof args.options === 'undefined')
    );

    // Set the initial content state,
    // changes MUST go through `updateContent()`
    this.content = (
      isHTMLSafe(args.content) ?
      args.content :
      htmlSafe(args.content)
    );

  }


  @action createEditor(element, [options]) {
    new FroalaEditor(element, options);
  }


  @action createdEditor(editor, initEventName, ...args) {

    // Save the editor instance now that methods can be called
    this.editor = editor;

    // Add event handler callbacks, passing in the editor as the first arg
    for (let eventName in this.combinedCallbacks) {
      this.editor.events.on(eventName, captureEditorWrapper(this.combinedCallbacks[eventName]));
    }

    // Add destroyed callback so the editor can be unreferenced
    this.editor.events.on('destroy', captureEditorWrapper(this.destroyedEditor));

    // Since we overrode this event callback,
    // call the passed in callback(s) if there are any
    if (this.combinedOptions.events && typeof this.combinedOptions.events[initEventName] === 'function') {
      // Mimic default behavior by binding the editor instance to the called context
      this.combinedOptions.events[initEventName].bind(editor)(...args);
    }
    if (this.combinedCallbacks.events && typeof this.combinedCallbacks.events[initEventName] === 'function') {
      // Mimic a typical on-* callback by passing in the editor as the first arg
      this.combinedCallbacks.events[initEventName](editor, ...args);
    }

  }


  @action updateContent(element, [content]) {

    // When the editor is available,
    // updates should go through `editor.html.set()`
    if (this.editor) {

      // Avoid recursive loop, check for changed content
      if (this.editor.html.get() != content.toString()) {
        this.editor.html.set(content.toString());
      }

    // When the editor is NOT available,
    // updates should go through the template
    } else {

      // Avoid recursive loop, check for changed content
      if (this.content.toString() != content.toString()) {
        this.content = (isHTMLSafe(content) ? content : htmlSafe(content));
      }

    }
  }


  @action destroyEditor(/*element*/) {
    this.editor.destroy();
  }


  @action destroyedEditor(/*editor, ...args*/) {
    this.editor = null;
  }


}
