/* jshint node: true */
'use strict';


// Module requirements
var fs         = require('fs');
var path       = require('path');
var Funnel     = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');


// Resolve the froala-editor node path once..
var froalaPath = path.dirname(
  require.resolve( 'froala-editor/package.json' )
);


module.exports = {
  name: 'ember-froala-editor',


  // Addon build option defaults
  defaultOptions: {
    plugins   : true, // == ALL available plugins
    languages : false,
    themes    : false
  },


  // https://simplabs.com/blog/2017/02/13/npm-libs-in-ember-cli.html
  treeForVendor: function( vendorTree ) {
    var froalaTree = new Funnel( froalaPath, {
      include : ['css/**/*','js/**/*'],
      destDir : 'froala-editor'
    });
    return new MergeTrees([ vendorTree, froalaTree ]);
  }, // :treeForVendor


  included: function( app, parent ) {


    // http://ember-cli.com/extending/#addon-entry-point
    this._super.included.apply( this, arguments );


    // https://ember-cli.com/extending/#broccoli-build-options-for-in-repo-addons
    var target = ( parent || app );


    // Build options by merging default options
    // with the apps ember-cli-build.js options
    var options = Object.assign(
      this.defaultOptions,
      ( target.options[ this.name ] || {} )
    );


    // When importing files, import from vendor instead of the node path
    var vendorPath = path.join( 'vendor', 'froala-editor');


    // Import the base Froala Editor files
    target.import( path.join( vendorPath, 'js', 'froala_editor.min.js' ) );
    target.import({
      development : path.join( vendorPath, 'css', 'froala_editor.css' ),
      production  : path.join( vendorPath, 'css', 'froala_editor.min.css' )
    });
    target.import({
      development : path.join( vendorPath, 'css', 'froala_style.css' ),
      production  : path.join( vendorPath, 'css', 'froala_style.min.css' )
    });


    // Bucket for import list / details
    var additionalAssets = [];


    // Import the other Froala Editor files (when requested)
    if ( options.plugins && options.plugins !== [] ) {
      additionalAssets.push({
        label     : 'Plugin(s)',
        path      : path.join( 'js', 'plugins' ),
        files     : options.plugins,
        extension : '.min.js'
      });
      additionalAssets.push({
        label     : 'Plugin CSS',
        path      : path.join( 'css', 'plugins' ),
        files     : options.plugins,
        extension : '.css',
        optional  : true
      });
    }
    if ( options.languages && options.languages !== [] ) {
      additionalAssets.push({
        label     : 'Language(s)',
        path      : path.join( 'js', 'languages' ),
        files     : options.languages,
        extension : '.js'
      });
    }
    if ( options.themes && options.themes !== [] ) {
      additionalAssets.push({
        label     : 'Themes(s)',
        path      : path.join( 'css', 'themes' ),
        files     : options.themes,
        extension : '.css'
      });
    }


    // Access to `this` context within the `.forEach()` loop below
    var addon = this;


    // Common logic to import plugins / languages / themes
    additionalAssets.forEach(function( asset ){


      // List of files for the given path
      var pathFiles = fs.readdirSync( path.join( froalaPath, asset.path ) );


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


        // If the file type is CSS then import both
        // the non-minified and minified versions
        if ( asset.extension === '.css' ) {
          target.import({
            development : path.join( vendorPath, asset.path, file + asset.extension ),
            production  : path.join( vendorPath, asset.path, file + '.min' + asset.extension )
          });
        } else {
          target.import(
            path.join( vendorPath, asset.path, file + asset.extension )
          );
        }


      }); // files.forEach()


      // Display an error message if any required files are missing
      if ( missingFiles.length > 0 && !asset.optional ) {
        throw new Error(
          addon.name + ': ' + asset.label +
          ' specified in ember-cli-build.js are missing, ' +
          'make sure they are spelled correctly (' + missingFiles.join(', ') + ')'
        );
      }


    }); // additionalAssets.forEach()


  } // :included


}; // module.exports
