/* jshint node: true */
'use strict';


// Module requirements
var fs   = require('fs');
var path = require('path');


module.exports = {
  name: 'ember-froala-editor',


  // Addon build option defaults
  defaultOptions: {
    plugins   : true, // == ALL available plugins
    languages : false,
    themes    : false
  },


  // https://github.com/dfreeman/ember-cli-node-assets#dynamic-configuration
  included: function(parent) {
    var buildOptions  = parent.options && parent.options[ this.name ] || {};
    this.addonOptions = Object.assign( this.defaultOptions, buildOptions );
    this._super.included.apply( this, arguments );
  }, // :included


  // https://github.com/dfreeman/ember-cli-node-assets#usage
  options: {
    nodeAssets: {
      'froala-editor': function(){


        // Recommended solution to get full 'node_modules/froala-editor' path
        // `this.nodeModulesPath` may not resolve to the proper path
        var froalaNodePath = path.dirname(
          require.resolve('froala-editor/package.json')
        );


        // Make sure Froala Editor is available
        if ( !fs.existsSync( froalaNodePath ) ) {
          throw new Error(
            this.name + ': froala-editor is not available from node_modules (' +
            froalaNodePath + '), install your project dependencies by running `npm install`'
          );
        }


        // Buckets for various things..
        var assetPaths       = []; // asset paths to return/import
        var additionalAssets = []; // import paths to check


        // Import the base Froala Editor files
        assetPaths.push(path.join( 'js',  'froala_editor.min.js' ));
        assetPaths.push(path.join( 'css', 'froala_editor.css'    ));
        assetPaths.push(path.join( 'css', 'froala_style.css'     ));


        // Import the other Froala Editor files (when requested)
        if ( this.addonOptions.plugins && this.addonOptions.plugins !== [] ) {
          additionalAssets.push({
            label     : 'Plugin(s)',
            path      : path.join( 'js', 'plugins' ),
            files     : this.addonOptions.plugins,
            extension : '.min.js'
          });
          additionalAssets.push({
            label     : 'Plugin CSS',
            path      : path.join( 'css', 'plugins' ),
            files     : this.addonOptions.plugins,
            extension : '.css',
            optional  : true
          });
        }
        if ( this.addonOptions.languages && this.addonOptions.languages !== [] ) {
          additionalAssets.push({
            label     : 'Language(s)',
            path      : path.join( 'js', 'languages' ),
            files     : this.addonOptions.languages,
            extension : '.js'
          });
        }
        if ( this.addonOptions.themes && this.addonOptions.themes !== [] ) {
          additionalAssets.push({
            label     : 'Themes(s)',
            path      : path.join( 'css', 'themes' ),
            files     : this.addonOptions.themes,
            extension : '.css'
          });
        }


        // Access to `this` context within the `.forEach()` loop below
        var addon = this;


        // Common logic to import plugins / languages / themes
        additionalAssets.forEach(function( asset ){


          // List of files for the given path
          var pathFiles = fs.readdirSync( path.join( froalaNodePath, asset.path ) );


          // Bucket for missing files
          var missingFiles = [];


          // Convert the option value to an array,
          // depending on the option type
          if ( typeof asset.files === 'boolean' ) {


            // Generate a list of _all_ the available files
            asset.files = pathFiles.map(function( file ){
              return file.split('.')[0]; // remove extensions
            }).reduce(function( files, file ){
              if ( files.indexOf( file ) === -1 ) files.push( file );
              return files; // return a unique list
            }, []);


          } else if ( typeof asset.files === 'string' ) {
            asset.files = [ asset.files ];


          } else if ( !Array.isArray( asset.files ) ) {
            throw new Error(
              addon.name + ': ' + asset.label +
              ' option in ember-cli-build.js is an invalid type, ' +
              'ensure it is either a boolean (all or none), ' +
              'string (just one), or array (specific list)'
            );
          }


          // Loop through each requested file
          asset.files.forEach(function( file ){


            // Make sure the requested file exists
            if ( pathFiles.indexOf( file + asset.extension ) === -1 ) {
              missingFiles.push( file );
              return; // continue;
            }


            // Include the requested file
            assetPaths.push( path.join( asset.path, file + asset.extension ) );


          }); // files.forEach()


          // Display an error message if any requested files are missing
          if ( missingFiles.length > 0 && !asset.optional ) {
            throw new Error(
              addon.name + ': ' + asset.label +
              ' specified in ember-cli-build.js are missing, ' +
              'make sure they are spelled correctly (' + missingFiles.join(', ') + ')'
            );
          }


        }); // additionalAssets.forEach()


        // Return the final list of node assets to import
        // Ex: { import:['editor.js','theme.css'] }
        return { import:assetPaths };


      } // :'froala-editor'
    } // :nodeAssets
  } // :options


}; // module.exports
