import { helper } from '@ember/component/helper';
import { assert } from '@ember/debug';

export function froalaHtml([editor]/*, hash*/) {
  assert(
    '{{froala-html}} helper cannot determine the editor instance',
    (editor && editor.html && typeof editor.html.get === 'function') ||
    (this && this.html && typeof this.html.get === 'function')
  );
  let html = editor && editor.html || this.html;
  return html.get();
}

export default helper(froalaHtml);
