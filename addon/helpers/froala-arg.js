import { helper } from '@ember/component/helper';
import { assert } from '@ember/debug';

export function froalaArg([callback, ...partial]/*, hash*/) {
  assert(
    '{{froala-arg}} helper requires a function as the first parameter',
    typeof callback === 'function'
  );
  return function captureEditor(...args) {
    return callback(this, ...partial, ...args);
  };
}

export default helper(froalaArg);
