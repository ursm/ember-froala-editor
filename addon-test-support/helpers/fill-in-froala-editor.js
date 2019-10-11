import FroalaEditor from 'froala-editor';
import { run } from '@ember/runloop';
import { registerAsyncHelper } from '@ember/test';
import { settled } from '@ember/test-helpers';

export default registerAsyncHelper('fillInFroalaEditor', function(app, selector, html) {
  fillInFroalaEditor(selector, html);
});

export async function fillInFroalaEditor(selector, html) {

  // Get the editor element of the selector
  let editor = FroalaEditor(`${selector} .froala-editor-instance`);

  // Convert SafeStrings to regular string
  html = (
    html && typeof html.toString === 'function' ?
    html.toString() :
    ''
  );

  // Apply html via Froala Editor method and trigger a change event
  run(() => {
    editor.html.set(html);
    editor.undo.saveStep();
  });

  // Wait for the above runloop to finish
  return settled();

}
