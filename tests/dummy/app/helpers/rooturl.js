import Ember from 'ember';
import ENV from '../config/environment';

export function rooturl(/*params, hash*/) {
  return ENV.rootURL;
}

export default Ember.Helper.helper(rooturl);
