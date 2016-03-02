import Ember from 'ember';


export function mergedHash( params, hash ) {
  if ( params.length > 0 ) {
    return Object.assign( {}, ...params, hash ); // Assumes all params are objects
  } else {
    return hash;
  }
} // mergedHash()


export default Ember.Helper.helper(mergedHash);
