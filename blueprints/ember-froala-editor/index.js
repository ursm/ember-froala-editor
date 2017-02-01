/*jshint node:true*/

module.exports = {
  description: 'Add a project dep for ember-font-awesome',

  normalizeEntityName: function() {
    // allows us to run ember -g ember-bootstrap-switch and not blow up
    // because ember cli normally expects the format
    // ember generate <entitiyName> <blueprint>
  }, // :normalizeEntityName

  afterInstall: function() {
    return this.addAddonToProject('ember-font-awesome');
  } // :afterInstall

}; // module.exports
