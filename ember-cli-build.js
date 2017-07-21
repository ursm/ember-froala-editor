/* eslint-env node */
'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {

    // Import _all_ Froala Editor files
    // for the "dummy" app
    'ember-froala-editor': {
      plugins  : true,
      languages: true,
      themes   : true
    },

    // Use Bootswatch in the "dummy" app
    // to resemble the Froala Editor Website
    'ember-cli-bootswatch': {
      theme    : 'paper',
      excludeJS: true
    }

  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  // Import the two specific Bootstrap plugins
  // required for the responsive navbar
  app.import('bower_components/bootstrap/js/transition.js');
  app.import('bower_components/bootstrap/js/collapse.js');

  return app.toTree();
};
