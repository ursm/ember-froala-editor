import Ember from 'ember';


export function mergedHash( params, hash ) {
  // Assumes all params are objects
  if ( params.length > 0 ) {
    let merged = {};

    // Use Ember.assign() if available (added in ember v2.5)
    if ( Ember.assign ) {
      merged = Ember.assign( merged, ...params, hash );

    // Fall back to Ember.merge() (depreciated as of ember v2.5)
    } else {
      params.forEach( param => {
        merged = Ember.merge( merged, param );
      });
      merged = Ember.merge( merged, hash );
    }

    return merged;
  } else {
    return hash;
  }
} // mergedHash()


export default Ember.Helper.helper(mergedHash);
