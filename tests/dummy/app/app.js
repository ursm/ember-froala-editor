import $ from 'jquery';
import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver,
  ready: function(){
    // Hide the initial loading message
    // TODO: Move to application Routeable Component once released
    //       Could be put in the application View didInsertElement() hook for now...
    $( '#app-loading' ).fadeOut( 'slow' );
  }
});

loadInitializers(App, config.modulePrefix);

export default App;
