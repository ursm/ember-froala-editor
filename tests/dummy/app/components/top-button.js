import Ember from 'ember';
import layout from '../templates/components/top-button';

export default Ember.Component.extend({
  layout,


  elementId: 'top-button',


  tagName: 'a',


  classNames: [
    'btn',
    'btn-lg',
    'btn-primary',
    'btn-circle',
    'hidden-print'
  ], // :classNames


  classNameBindings: ['invisible'],


  invisible: Ember.computed.lt( 'yPosition', 300 ),


  init() {
    this._super( ...arguments );
    this.set( 'yPosition', 0 );
  },


  didInsertElement() {
    this._super( ...arguments );
    Ember.$( window ).on(
      'scroll',
      this.didScroll.bind(this)
    );
  },


  willDestroyElement() {
    this._super( ...arguments );
    Ember.$( window ).off(
      'scroll',
      this.didScroll.bind(this)
    );
  },


  didScroll() {
    Ember.run.debounce(
      this,
      'updatePosition',
      300
    );
  },


  updatePosition() {
    this.set( 'yPosition', window.scrollY );
  },


  click() {
    Ember.$( 'html,body' ).animate(
      {scrollTop:0},
      'slow'
    );
  }

});
