import { helper } from '@ember/component/helper';
import { assign } from '@ember/polyfills';


export function mergedHash( params, hash ) {
  // Assumes all params are objects
  if ( params.length > 0 ) {
    return assign( {}, ...params, hash );
  } else {
    return hash;
  }
} // mergedHash()


export default helper(mergedHash);
