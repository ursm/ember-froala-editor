/*jshint node:true*/
var RSVP = require('rsvp');

module.exports = {
  description: 'Add bower dependency for froala-wysiwyg-editor and also a project dep for ember-font-awesome',

  normalizeEntityName: function() {
    // allows us to run ember -g ember-bootstrap-switch and not blow up
    // because ember cli normally expects the format
    // ember generate <entitiyName> <blueprint>
  }, // :normalizeEntityName

  afterInstall: function() {
    return RSVP.all([
      this.addBowerPackageToProject( 'froala-wysiwyg-editor',  '~2.4.1' ),
      this.addAddonToProject(        'ember-font-awesome', '^2.2.0' )
    ]);
  } // :afterInstall

}; // module.exports
