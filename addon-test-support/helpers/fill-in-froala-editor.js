import $ from 'jquery';
import { run } from '@ember/runloop';
import { isHTMLSafe } from '@ember/string';
import { registerAsyncHelper } from '@ember/test';
import { settled } from '@ember/test-helpers';

export default registerAsyncHelper('fillInFroalaEditor', function(app, selector, html) {
  fillInFroalaEditor(selector, html);
});

export async function fillInFroalaEditor(selector, html) {

  // Get the editor element of the selector
  let $editor = $('.froala-editor-instance', selector);

  // Convert safestrings to regular string
  html = (
    isHTMLSafe(html) ?
    html.toString() :
    html
  );

  // Apply html via Froala Editor method and trigger a change event
  run(() => {
    $editor.froalaEditor('html.set', html);
    $editor.froalaEditor('undo.saveStep');
  });

  // Wait for the above runloop to finish
  return settled();

}
