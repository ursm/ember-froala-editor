import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver,
  ready: function(){
    // Hide the initial loading message
    // TODO: Move to application Routeable Component once released
    //       Could be put in the application View didInsertElement() hook for now...
    Ember.$( '#app-loading' ).fadeOut( 'slow' );
  }
});

loadInitializers(App, config.modulePrefix);

export default App;
