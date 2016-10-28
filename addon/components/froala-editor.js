import Ember from 'ember';
import layout from '../templates/components/froala-editor';
import isHTMLSafe from 'ember-string-ishtmlsafe-polyfill';
import assign from 'ember-assign-polyfill';


const FroalaEditorComponent = Ember.Component.extend({
  layout,




  // Enable the ability to .extend() this Component
  // to define "default" options that will get merged
  // with any options passed in as an attribute
  mergedProperties: [
    'defaultOptions'
  ],




  // Empty options hash, .extend() this Component
  // to define defaults. Ex: `defaultOptions:{ heightMin:200 }`
  defaultOptions: {},




  // Froala Editor prefixes all event names,
  // which is technically NOT a namespace,
  // and should be used when attaching event handlers
  // Note: Include the trailing dot
  eventPrefix: 'froalaEditor.',




  // Option to return a SafeString when using on-*-getHtml event actions
  // By default, look at the current type of `content`
  returnSafeString: Ember.computed('content', function(){
    return isHTMLSafe( this.get('content') );
  }),




  // Private, internal Computed Property to handle SafeString support
  // and it will always return a string, even if `content` is null or undefined
  // Note: Both Strings and SafeStrings have a .toString() function
  _content: Ember.computed('content', {
    get() {
      let content = this.get('content');
      return (
        content && typeof content.toString === 'function' ?
        content.toString() :
        ''
      );
    }
  }),




  // Private, internal Computed Property to merge all the possible "options"
  _options: Ember.computed('defaultOptions', 'options', {
    get() {
      return assign(
        {},
        this.getWithDefault('defaultOptions', {}),
        this.getWithDefault('options', {})
      );
    }
  }),




  // Public facing API's for editor instance and state information
  // Note: The referenced properties are .set() on the init() hook
  editor            : Ember.computed.readOnly( '_editor'             ),
  editorInitializing: Ember.computed.readOnly( '_editorInitializing' ),
  editorInitialized : Ember.computed.readOnly( '_editorInitialized'  ),
  editorDestroying  : Ember.computed.readOnly( '_editorDestroying'   ),
  editorDestroyed   : Ember.computed.not(      'editorInitialized'   ),




  /**********
   * Ember Lifecycle Hooks
   *
   * These will basically get everything going, from setup to tear down.
   * They are listed in the order they are typically called.
   **********/




  // Initialize the per-instance property defaults,
  // mainly for internal state flags and details.
  // https://guides.emberjs.com/v2.9.0/object-model/classes-and-instances/#toc_initializing-instances
  init() {
    this._super( ...arguments );
    this.set( '_editor'            , null  );
    this.set( '_editorInitializing', false );
    this.set( '_editorInitialized' , false );
    this.set( '_editorDestroying'  , false );
  }, // init()




  // Start the setup...
  didInsertElement() {
    this._super( ...arguments );
    Ember.run.schedule( 'afterRender', this, this.initEditor );
  }, // didInsertElement()




  // Look for changes in `content`
  // and update directly on the editor
  didUpdateAttrs() {
    this._super( ...arguments );

    let editor  = this.get('_editor');
    let content = this.get('_content');

    if ( editor && editor.html.get() !== content ) {
      editor.html.set( content );
    }

  }, // didUpdateAttrs()




  // Start the tear down...
  willDestroyElement() {
    this._super( ...arguments );
    this.destroyEditor();
  }, // willDestroyElement()




  /**********
   * Froala Editor Lifecycle Methods
   *
   * The following are methods used to setup and tear down the Froala Editor.
   * The Ember Lifecycle hooks will typically call these methods,
   * although they _could_ be called in a custom event handler.
   **********/




  // Responsible for the actual initialization of the Froala Editor
  // and sets up required event handlers and property observers
  initEditor() {

    // Do NOT re-initialize, user should call reinitEditor()
    if ( this.get('_editorInitialized') || this.get('_editorInitializing') ) {
      return;
    }


    // Update the state flag so we know initialization has started
    this.set( '_editorInitializing', true );


    // Init jQuery once...
    let $element = this.$();


    // Attach a one time 'froalaEditor.initialized' event handler
    // to know when initialization has finished, updating state flags
    // Note: Cannot be done via editor.events.on()
    //       since access to `editor` is not available yet
    $element.one(
      this.get('eventPrefix') + 'initialized',
      Ember.run.bind(this, 'didInitEditor')
    );


    // Actual initialization of the Froala Editor
    $element.froalaEditor( this.get('_options') );

  }, // initEditor()




  // Just a quick method to destroy then initialize the editor,
  // the called methods will properly handle the current state
  reinitEditor() {
    this.destroyEditor();
    this.initEditor();
  }, // reinitEditor()




  // Responsible for destroying the Froala Editor and tearing down
  // everything that was setup in the initEditor() method
  destroyEditor() {

    // Do NOT try to destroy if there is nothing to destroy...
    // Note: !this.get('_editorInitialized') == this.get('editorDestroyed')
    if ( !this.get('_editorInitialized') || this.get('_editorDestroying') ) {
      return;
    }


    // Update the state flag so we know destroying has started
    this.set( '_editorDestroying', true );


    // Note: Destroy event handler added in didInitEditor()


    // Actual destruction of the Froala Editor
    this.$().froalaEditor( 'destroy' );

  }, // destroyEditor()




  /**********
   * Froala Editor Event Handlers
   *
   * Callbacks for event listeners setup by the
   * Froala Editor Lifecycle Methods above and
   * any event callbacks added by didInitEditor()
   **********/




  // Triggered by the 'froalaEditor.initialized' event, updates
  // component state flags, sets the original html/content, and
  // attaches event handlers directly to the editor
  didInitEditor( event, editor, ...params ) {
    this.set( '_editorInitializing', false  );
    this.set( '_editorInitialized' , true   );
    this.set( '_editor'            , editor );


    // Set the initial HTML content
    editor.html.set( this.get('_content') );


    // Regex's used for replacing things in the property name
    const regexOnOrHtml = /(^on\-|\-getHtml$)/g;
    const regexHyphens  = /\-/g;
    const regexDots     = /\./g;


    // Go through all the property names looking for event handlers, on-*
    // Note: Use a for-in loop here over Object.keys() to get _all_ properties
    //       up the proto-chain, specifically needed when .extend()ing
    for ( let propertyName in this ) {


      // Just need on-* properties...
      // if ( !propertyName.startsWith('on-') ) // ES2015 (requires polyfill)
      if ( propertyName.indexOf('on-') !== 0 ) {
        continue;
      }


      // Initialization actions will be triggered later,
      // that way the component is setup before calling the event action
      // if ( propertyName.startsWith('on-initialized') ) // ES2015 (requires polyfill)
      if ( propertyName.indexOf('on-initialized') === 0 ) {
        continue;
      }


      // Convert the property name to what the event name would be
      let eventName = propertyName;
      eventName = eventName.replace( regexOnOrHtml, '' );
      eventName = eventName.replace( regexHyphens , '.');


      // Special use case for the 'popups.hide.[id]' event
      // Ember usage would be 'on-popups-hide-id=(action)'
      // https://www.froala.com/wysiwyg-editor/docs/events#popups.hide.[id]
      // if ( eventName.startsWith('popups.hide.') ) // ES2016 (requires polyfill)
      if ( eventName.indexOf('popups.hide.') === 0 ) {
        let id = eventName.replace( 'popups.hide.', '' );
        id = id.replace( regexDots, '-' ); // Convert back to hyphens
        eventName = `popups.hide.[${id}]`;
      }


      // Attach the appropriate event handler
      // if ( propertyName.endsWith('-getHtml') ) // ES2016 (requires polyfill)
      let getHtmlPos = propertyName.indexOf('-getHtml', -8);
      if ( getHtmlPos !== -1 && getHtmlPos === propertyName.length - 8 ) {
        editor.events.on(
          eventName,
          Ember.run.bind( this, this.didEditorEventReturnHtml, propertyName, editor ),
          true
        );
      } else {
        editor.events.on(
          eventName,
          Ember.run.bind( this, this.didEditorEvent, propertyName ),
          true
        );
      }


    } // for ()


    // Add the destroy event handler
    // Run _after_ any other destroy handler
    editor.events.on(
      'destroy',
      Ember.run.bind( this, this.didDestroyEditor, editor ),
      false
    );


    // Fire the "initialized" event actions (if defined)
    if ( this.get('on-initialized') ) {
      this.didEditorEvent( 'on-initialized', ...params );
    }
    if ( this.get('on-initialized-getHtml') ) {
      this.didEditorEventReturnHtml( 'on-initialized-getHtml', editor, ...params );
    }

  }, // didInitEditor()




  // Triggered by the 'froalaEditor.destroy' event,
  // updates component state flags
  didDestroyEditor() {
    this.set( '_editor'           , null  );
    this.set( '_editorDestroying' , false );
    this.set( '_editorInitialized', false );
    // No need for '_editorDestroyed', the Computed
    // Property 'editorDestroyed' fills that need
  }, // didDestroyEditor()




  // Event handler for the 'on-*' property actions, which should be strings or functions
  // When the action is a function, return the handlers returned value back to the editor,
  // this allows support of "canceling" a Froala Editor event.
  // Note: This function is only triggered for Froala Editor events
  //       that have a related 'on-*' property defined for Ember actions
  didEditorEvent( propertyName, ...params ) {
    if ( typeof this[ propertyName ] === 'function' ) {
      return this[ propertyName ](
        this,
        ...params
      );
    } else {
      this.sendAction(
        propertyName,
        this,
        ...params
      );
    }
  }, // didEditorEvent()




  // Event handler for the 'on-*-getHtml' property actions,
  // returns the editors current html as the first argument.
  // This is mainly useful when combined with the (mut) helper
  // Note: This function is only triggered for Froala Editor events
  //       that have a related 'on-*-getHtml' property defined for Ember actions
  didEditorEventReturnHtml( propertyName, editor, ...params ) {

    // Get the HTML to return as the first argument
    let html = editor.html.get();


    // SafeString in = SafeString out..
    if ( this.get('returnSafeString') ) {
      html = Ember.String.htmlSafe( html );
    }


    // When the action is a function, return the handlers returned value back to the editor,
    // this allows support of "canceling" a Froala Editor event.
    if ( typeof this[ propertyName ] === 'function' ) {
      return this[ propertyName ](
        html,
        this,
        ...params
      );
    } else {
      this.sendAction(
        propertyName,
        html,
        this,
        ...params
      );
    }

  }, // didEditorEventReturnHtml()




  /**********
   * Froala Editor Method APIs
   *
   * Expose the Froala Editor methods in "Ember land",
   * basically proxies everything to the editor instance...
   **********/




  // Generic method() function that will proxy the call
  // to the Froala Editor public API for methods
  // Notes: Also handles editor state properly by returning a Promise if need be
  method( methodName ) {

    // special, added, ember-froala-editor specific method
    if ( methodName === 'reinit' ) {
      this.reinitEditor();


    // Editor should be initialized before calling the method
    } else if ( this.get('_editorInitialized') ) {
      return this.$().froalaEditor( ...arguments );


    } else {


      // Label for the following Promise, so it appears nicely in the Ember Inspector
      const promiseLabel = 'froala-editor: ' +
        `Delayed method() call to '${methodName}' until editor is initialized`
      ;


      // Instead of throwing an error, lets return a Promise
      // that will call the method once the editor _is_ initialized
      return new Ember.RSVP.Promise( (resolve, reject) => {


        // Create a one time event listener for the initialized event
        this.$().one(
          this.get('eventPrefix') + 'initialized',
          () => {


            // Try calling the Froala Editor method, returning the outcome
            try {
              resolve(
                this.$().froalaEditor( ...arguments )
              );
            } catch (e) {
              reject(e);
            }


          } // () => {}
        ); // this.$().one()


      }, promiseLabel ); // Ember.RSVP.Promise()


    } // else ( !editorInitialized )

  }, // method()




  // Also define the method() as a Component action, that way it could be invoked
  // as component.send('method', 'method.name', 'arg') from an event handler
  actions: {
    method() {
      this.method( ...arguments );
    } // method()
  } // :actions


}); // Ember.Component.extend()


FroalaEditorComponent.reopenClass({
  positionalParams: ['content', 'on-contentChanged-getHtml', 'options']
});


export default FroalaEditorComponent;
