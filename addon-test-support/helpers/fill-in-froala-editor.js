import { run } from '@ember/runloop';
import { registerAsyncHelper } from '@ember/test';

export default registerAsyncHelper('fillInFroalaEditor', function(app, selector, html) {
  return fillInFroalaEditor(selector, html);
});

export function fillInFroalaEditor(selector, html) {
  let $editor = find('.froala-editor-instance', selector);
  // SafeString support
  html = (
    html && typeof html.toString === 'function' ?
    html.toString() :
    ''
  );
  run(() => {
    $editor.froalaEditor('html.set', html);
    $editor.froalaEditor('undo.saveStep');
  });
}
