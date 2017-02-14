import Ember from 'ember';


export function mergedHash( params, hash ) {
  // Assumes all params are objects
  if ( params.length > 0 ) {
    return Ember.assign( {}, ...params, hash );
  } else {
    return hash;
  }
} // mergedHash()


export default Ember.Helper.helper(mergedHash);
