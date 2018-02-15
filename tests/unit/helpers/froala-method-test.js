import { froalaMethod } from 'dummy/helpers/froala-method';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Helper | froala-method', function(hooks) {
  setupTest(hooks);

  test('returns a closure / function', function(assert) {
    let closure = froalaMethod(["froala.method.name"]);
    assert.equal(typeof closure, 'function');
  });

});
