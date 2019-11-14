import { isHTMLSafe } from '@ember/template';
import { registerAsyncHelper } from '@ember/test';
import { find, fillIn } from '@ember/test-helpers';
// import { find, settled } from '@ember/test-helpers';
// import FroalaEditor from 'froala-editor';

export default registerAsyncHelper('fillInFroalaEditor', function(app, selector, html) {
  return fillInFroalaEditor(selector, html);
});

export async function fillInFroalaEditor(selector, html) {

  let element = find(`${selector} [contenteditable]`);

  if (element === null) {
    throw `[contenteditable] DOM element not found within the selector '${selector}'. ` +
      "Try adding 'await settled();' in your test before and after using 'fillInFroalaEditor()'";
  }

  html = (
    isHTMLSafe(html) ?
    html.toString() :
    html
  );

  return fillIn(element, html);

  // let element = find(selector);

  // if (element === null) {
  //     throw `fillInFroalaEditor(): DOM element not found with the selector '${selector}'`;
  // }

  // let editor = FroalaEditor.INSTANCES.find(instance => {
  //   if (instance['$oel'][0] === element) {
  //     return instance;
  //   }
  // });

  // html = (
  //   isHTMLSafe(html) ?
  //   html.toString() :
  //   html
  // );

  // if (editor) {
  //   editor.html.set(html);
  //   editor.undo.saveStep(); // Triggers contentChanged
  // } else {
  //   element.innerHTML = html; // TODO: Trigger input event
  // }

  // return settled();

}
