import Ember from 'ember';
import config from 'dummy/config/environment';


export default Ember.Controller.extend({

  // Grab the current version to show what
  // version the documentation was generated for
  addonVersion: config.APP.version

});
