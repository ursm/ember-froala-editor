import $ from 'jquery';
import EmberRouter from '@ember/routing/router';
import { inject as service } from '@ember/service';
import { next, schedule } from '@ember/runloop';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,


  // The following will maintain scroll position for each URL
  // Enables a more natural feel when using the browser Forward/Back buttons
  scrollPositions: service(),
  didTransition() {
    this._super( ...arguments );
    // Wait for 'url' to change...
    next(this, function(){
      let scroll   = this.get('scrollPositions');
      let url      = this.get('url');
      let position = scroll.get( url );
      // Wait for things to settle, finish rendering...
      schedule('afterRender', this, function(){
        $( 'html,body' ).scrollTop( position || 0 );
      });
    });
  },
  willTransition() {
    this._super( ...arguments );
    let scroll = this.get('scrollPositions');
    let url    = this.get('url');
    scroll.set( url, window.scrollY );
  }


});

Router.map(function() {
  this.route('addon', function(){
    this.route('installation');
    this.route('configuration');
    this.route('concepts');
    this.route('test-helper');
  });
  // Different folder name to avoid collisions
  this.route('addon-components', {path:'components'}, function(){
    this.route('froala-editor');
    this.route('froala-content');
  });
  this.route('addon-helpers', {path:'helpers'}, function(){
    this.route('froala-method');
    this.route('merged-hash');
  });
});

export default Router;
