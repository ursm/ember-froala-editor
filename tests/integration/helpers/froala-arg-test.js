import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { froalaArg } from 'ember-froala-editor/helpers/froala-arg';

module('Integration | Helper | froala-arg', function(hooks) {
  setupRenderingTest(hooks);


  test('bound editor context is returned to the callback as the first arg', function(assert) {
    let editor = { froala:'editor' };
    let callback = function(editor) {
      return editor;
    }
    assert.deepEqual(froalaArg([callback]).bind(editor)(), editor);
  });


  test('partial application parameters are applied', function(assert) {
    let editor = { froala:'editor' };
    let check = 'foobar';
    let callback = function(editor, param1) {
      return param1;
    }
    assert.equal(froalaArg([callback, check]).bind(editor)(), check);
  });


  test('event arguments are applied', function(assert) {
    let editor = { froala:'editor' };
    let check = 'foobar';
    let callback = function(editor, param1) {
      return param1;
    }
    assert.equal(froalaArg([callback]).bind(editor)(check), check);
  });


  test('partial application parameters and event arguments are applied', function(assert) {
    let editor = { froala:'editor' };
    let check1 = 'foobar';
    let check2 = 'foobaz';
    let callback = function(editor, param1, param2) {
      return param2;
    }
    assert.equal(froalaArg([callback, check1]).bind(editor)(check2), check2);
  });


  test('helper function called without a callback asserts', function(assert) {
    assert.throws(() => froalaArg([]));
  });


});
