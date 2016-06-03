/*jshint node:true*/
var RSVP = require('rsvp');

module.exports = {
  description: 'Add bower dependency for froala-wysiwyg-editor and also a project dep for ember-cli-font-awesome',

  normalizeEntityName: function() {
    // allows us to run ember -g ember-bootstrap-switch and not blow up
    // because ember cli normally expects the format
    // ember generate <entitiyName> <blueprint>
  }, // :normalizeEntityName

  afterInstall: function() {
    return RSVP.all([
      this.addBowerPackageToProject( 'froala-wysiwyg-editor',  '~2.3.1' ),
      this.addAddonToProject(        'ember-cli-font-awesome', '^1.5.0' )
    ]);
  } // :afterInstall

}; // module.exports
