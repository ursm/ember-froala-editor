import { froalaMethod } from 'dummy/helpers/froala-method';
import { module, test } from 'qunit';

module('Unit | Helper | froala method');

test('returns a closure / function', function(assert) {
  let closure = froalaMethod(["froala.method.name"]);
  assert.equal(typeof closure, 'function');
});
