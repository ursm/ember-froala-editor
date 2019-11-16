import { helper } from '@ember/component/helper';
import { assign } from '@ember/polyfills';

export function mergedHash(params, hash) {
  // Assumes all params are objects
  return assign({}, ...params, hash);
}

export default helper(mergedHash);
