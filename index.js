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


  included: function(app, parentAddon) {

    // Per the ADDON_HOOKS.md document
    // https://github.com/ember-cli/ember-cli/blob/v2.6.0/ADDON_HOOKS.md#included
    this._super.included.apply(this, arguments);


    // Per the ember-cli documentation
    // http://ember-cli.com/extending/#addon-entry-point
    var target = (parentAddon || app);


    // Build options hash by merging default build options
    // with the apps ember-cli-build.js options
    var buildOptions = target.options[ this.name ] || {};
    var options      = Object.assign( this.defaultOptions, buildOptions );


    // Bower path to use while importing
    var froalaPath = path.join( target.bowerDirectory, 'froala-wysiwyg-editor' );


    // Make sure Froala Editor is available
    if ( !fs.existsSync( froalaPath ) ) {
      throw new Error(
        this.name + ': Froala Editor is not available from bower (' + froalaPath + '), ' +
        'install into your project by running `bower install froala-wysiwyg-editor --save`'
      );
    }


    // Import the base Froala Editor files
    target.import( path.join( froalaPath, 'js', 'froala_editor.min.js' ) );
    target.import({
      development : path.join( froalaPath, 'css', 'froala_editor.css' ),
      production  : path.join( froalaPath, 'css', 'froala_editor.min.css' )
    });
    target.import({
      development : path.join( froalaPath, 'css', 'froala_style.css' ),
      production  : path.join( froalaPath, 'css', 'froala_style.min.css' )
    });


    // Bucket for import list / details
    var importFiles = [];


    // Import the other Froala Editor files (when requested)
    if ( options.plugins && options.plugins !== [] ) {
      importFiles.push({
        label     : 'Plugin(s)',
        path      : path.join( froalaPath, 'js', 'plugins' ),
        files     : options.plugins,
        extension : '.min.js'
      });
      importFiles.push({
        label     : 'Plugin CSS',
        path      : path.join( froalaPath, 'css', 'plugins' ),
        files     : options.plugins,
        extension : '.css',
        optional  : true
      });
    }
    if ( options.languages && options.languages !== [] ) {
      importFiles.push({
        label     : 'Language(s)',
        path      : path.join( froalaPath, 'js', 'languages' ),
        files     : options.languages,
        extension : '.js'
      });
    }
    if ( options.themes && options.themes !== [] ) {
      importFiles.push({
        label     : 'Themes(s)',
        path      : path.join( froalaPath, 'css', 'themes' ),
        files     : options.themes,
        extension : '.css'
      });
    }


    // Access to `this` context within the `.forEach()` loop below
    var addon = this;


    // Common logic to import plugins / languages / themes
    importFiles.forEach(function( toImport ){


      // List of files for the given path
      var pathFiles = fs.readdirSync( toImport.path );


      // Bucket for missing files
      var missingFiles = [];


      // Convert the option value to an array,
      // depending on the option type
      if ( typeof toImport.files === 'boolean' ) {


        // Generate a list of _all_ the available files
        toImport.files = pathFiles.map(function( file ){
          return file.split('.')[0]; // remove extensions
        }).reduce(function( files, file ){
          if ( files.indexOf( file ) === -1 ) files.push( file );
          return files; // return a unique list
        }, []);


      } else if ( typeof toImport.files === 'string' ) {
        toImport.files = [ toImport.files ];


      } else if ( !Array.isArray( toImport.files ) ) {
        throw new Error(
          addon.name + ': ' + toImport.label +
          ' option in ember-cli-build.js is an invalid type, ' +
          'ensure it is either a boolean (all or none), ' +
          'string (just one), or array (specific list)'
        );
      }


      // Loop through each requested file
      toImport.files.forEach(function( file ){


        // Make sure the requested file exists
        if ( pathFiles.indexOf( file + toImport.extension ) === -1 ) {
          missingFiles.push( file );
          return; // continue;
        }


        // If the file type is CSS then import both
        // the non-minified and minified versions
        if ( toImport.extension === '.css' ) {
          target.import({
            development : path.join( toImport.path, file + toImport.extension ),
            production  : path.join( toImport.path, file + '.min' + toImport.extension )
          });
        } else {
          target.import(
            path.join( toImport.path, file + toImport.extension )
          );
        }


      }); // files.forEach()


      // Display an error message if any requested files are missing
      if ( missingFiles.length > 0 && !toImport.optional ) {
        throw new Error(
          addon.name + ': ' + toImport.label +
          ' specified in ember-cli-build.js are missing, ' +
          'make sure they are spelled correctly (' + missingFiles.join(', ') + ')'
        );
      }


    }); // importFiles.forEach()


  } // :included


}; // module.exports
