import Ember from 'ember';
import config from 'dummy/config/environment';


export default Ember.Controller.extend({

  // Grab the current version to show what
  // version the documentation was generated for
  addonVersion: Ember.computed({
    get() {
      let version = config.APP.version;

      // remove the sha (if there is one)
      version = version.split('+')[0];

      // ensure there is a "v" prefix
      if ( !version.startsWith('v') ) {
        version = `v${version}`;
      }

      return version;
    }
  })

});
