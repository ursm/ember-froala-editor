import Ember from 'ember';
import assign from 'ember-assign-polyfill';


export function mergedHash( params, hash ) {
  // Assumes all params are objects
  if ( params.length > 0 ) {
    return assign( {}, ...params, hash );
  } else {
    return hash;
  }
} // mergedHash()


export default Ember.Helper.helper(mergedHash);
