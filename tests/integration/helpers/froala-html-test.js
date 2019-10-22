import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { froalaHtml } from 'ember-froala-editor/helpers/froala-html';

module('Integration | Helper | froala-html', function(hooks) {
  setupRenderingTest(hooks);


  test('rendered helper with explicitly passed in editor', async function(assert) {
    this.set('editor', { // Mock an editor instance
      html: {
        get() {
          return '<p>Foobar</p>';
        }
      }
    });
    await render(hbs`{{froala-html editor}}`);
    assert.equal(this.element.textContent.trim(), '<p>Foobar</p>');
  });


  test('helper function called with explicitly passed in editor', function(assert) {
    let editor = { // Mock an editor instance
      html: {
        get() {
          return '<p>Foobar</p>';
        }
      }
    };
    assert.equal(froalaHtml([editor]), '<p>Foobar</p>');
  });


  test('helper function called with called context as the editor', function(assert) {
    let editor = { // Mock an editor instance
      html: {
        get() {
          return '<p>Foobar</p>';
        }
      }
    };
    assert.equal(froalaHtml.bind(editor)([]), '<p>Foobar</p>');
  });


  test('helper function called without any editor asserts', function(assert) {
    assert.throws(() => froalaHtml([]));
  });


});
