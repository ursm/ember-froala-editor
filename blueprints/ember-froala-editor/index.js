/*jshint node:true*/
var RSVP = require('rsvp');

module.exports = {
  description: '',

  afterInstall: function() {
    return RSVP.all([
      this.addBowerPackageToProject( 'froala-wysiwyg-editor',  '~2.2.1' ),
      this.addAddonToProject(        'ember-cli-font-awesome', '^1.4.2' )
    ]);
  } // :afterInstall

}; // module.exports
