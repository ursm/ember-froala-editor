import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { froalaHtml } from 'ember-froala-editor/helpers/froala-html';
import { isHTMLSafe } from '@ember/template';

module('Integration | Helper | froala-html', function(hooks) {
  setupRenderingTest(hooks);


  test('helper function called with explicitly passed in editor', function(assert) {
    let html = '<p>Foobar</p>';
    let editor = { // Mock an editor instance
      emberComponent: {}, // Added by <FroalaEditor>
      html: {
        get() {
          return html;
        }
      }
    };
    let setter = content => assert.equal(content, html);
    let closure = froalaHtml([setter]);
    closure(editor);
  });


  test('helper function called with called context as the editor', function(assert) {
    let html = '<p>Foobar</p>';
    let editor = { // Mock an editor instance
      emberComponent: {}, // Added by <FroalaEditor>
      html: {
        get() {
          return html;
        }
      }
    };
    // Ex: {{froala-html this.setter}}
    let setter = content => assert.equal(content, html);
    let closure = froalaHtml([setter]).bind(editor);
    closure();
  });


  test('additional arguments passed into the helper are available to the setter', function(assert) {
    let html = '<p>Foobar</p>';
    let editor = { // Mock an editor instance
      emberComponent: {}, // Added by <FroalaEditor>
      html: {
        get() {
          return html;
        }
      }
    };
    // Ex: {{froala-html this.setter this.htmlHere}}
    let setter = (content, editor, htmlHere) => assert.equal(htmlHere, html);
    let closure = froalaHtml([setter, html]);
    closure(editor);
  });


  test('additional arguments passed into the closure are available to the setter', function(assert) {
    let html = '<p>Foobar</p>';
    let editor = { // Mock an editor instance
      emberComponent: {}, // Added by <FroalaEditor>
      html: {
        get() {
          return html;
        }
      }
    };
    // Ex: @on-paste-afterCleanup={{froala-html this.setter}}
    let setter = (content, editor, clipboard_html) => assert.equal(clipboard_html, html);
    let closure = froalaHtml([setter]);
    closure(editor, html);
  });


  test('additional arguments passed into the helper and closure are available to the setter', function(assert) {
    assert.expect(2);
    let html = '<p>Foobar</p>';
    let editor = { // Mock an editor instance
      emberComponent: {}, // Added by <FroalaEditor>
      html: {
        get() {
          return html;
        }
      }
    };
    // Ex: @on-paste-afterCleanup={{froala-html this.setter this.html}}
    let setter = (content, editor, check1, check2) => {
      assert.equal(check1, html);
      assert.equal(check2, html);
    };
    let closure = froalaHtml([setter, html]);
    closure(editor, html);
  });


  test('helper wraps the html in a SafeString when the component returnSafeString is true', function(assert) {
    let html = '<p>Foobar</p>';
    let editor = { // Mock an editor instance
      emberComponent: { // Added by <FroalaEditor>
        returnSafeString: true
      },
      html: {
        get() {
          return html;
        }
      }
    };
    // Ex: @content={{safe-string this.html}} @on-some-event={{froala-html this.setter}}
    let setter = content => assert.ok(isHTMLSafe(content));
    let closure = froalaHtml([setter]);
    closure(editor);
  });


  test('helper function called without any editor asserts', function(assert) {
    let setter = () => {};
    let closure = froalaHtml([setter]);
    assert.throws(() => closure());
  });


  test('helper function called without any closure asserts', function(assert) {
    // Ex: {{froala-html}}
    assert.throws(() => froalaHtml([]));
  });


});
