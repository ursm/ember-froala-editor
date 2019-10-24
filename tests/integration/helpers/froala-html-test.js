import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { froalaHtml } from 'ember-froala-editor/helpers/froala-html';
import { isHTMLSafe } from '@ember/template';

module('Integration | Helper | froala-html', function(hooks) {
  setupRenderingTest(hooks);


  test('helper function called with explicitly passed in editor', function(assert) {
    let html = '<p>Foobar</p>';
    let editor = { // Mock an editor instance
      html: {
        get() {
          return html;
        }
      }
    };
    let setter = content => assert.equal(content, html);
    let callback = froalaHtml([setter]);
    callback(editor);
  });


  test('helper function called with called context as the editor', function(assert) {
    let html = '<p>Foobar</p>';
    let editor = { // Mock an editor instance
      html: {
        get() {
          return html;
        }
      }
    };
    let setter = content => assert.equal(content, html);
    let callback = froalaHtml([setter]).bind(editor);
    callback();
  });


  test('additional arguments passed into the helper are available to the setter', function(assert) {
    let html = '<p>Foobar</p>';
    let editor = { // Mock an editor instance
      html: {
        get() {
          return html;
        }
      }
    };
    let setter = (content, editor, htmlHere) => assert.equal(htmlHere, html);
    let callback = froalaHtml([setter, html]);
    callback(editor);
  });


  test('additional arguments passed into the callback are available to the setter', function(assert) {
    let html = '<p>Foobar</p>';
    let editor = { // Mock an editor instance
      html: {
        get() {
          return html;
        }
      }
    };
    let setter = (content, editor, htmlHere) => assert.equal(htmlHere, html);
    let callback = froalaHtml([setter]);
    callback(editor, html);
  });


  test('additional arguments passed into the helper and callback are available to the setter', function(assert) {
    assert.expect(2);
    let html = '<p>Foobar</p>';
    let editor = { // Mock an editor instance
      html: {
        get() {
          return html;
        }
      }
    };
    let setter = (content, editor, check1, check2) => {
      assert.equal(check1, html);
      assert.equal(check2, html);
    };
    let callback = froalaHtml([setter, html]);
    callback(editor, html);
  });


  test('helper wraps the html in a SafeString when the component returnSafeString is true', function(assert) {
    let html = '<p>Foobar</p>';
    let editor = { // Mock an editor instance
      emberComponent: {
        returnSafeString: true
      },
      html: {
        get() {
          return html;
        }
      }
    };
    let setter = content => assert.ok(isHTMLSafe(content));
    let callback = froalaHtml([setter]);
    callback(editor);
  });


  test('helper function called without any editor asserts', function(assert) {
    let setter = () => {};
    let callback = froalaHtml([setter]);
    assert.throws(() => callback());
  });


  test('helper function called without any callback asserts', function(assert) {
    assert.throws(() => froalaHtml([]));
  });


});
