import { helper } from '@ember/component/helper';
import ENV from '../config/environment';

export function rooturl(/*params, hash*/) {
  return ENV.rootURL;
}

export default helper(rooturl);
