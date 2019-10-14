(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': self['FroalaEditor'],
      __esModule: true,
    };
  }

  define('froala-editor', [], vendorModule);
})();
