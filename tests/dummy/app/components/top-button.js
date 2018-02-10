import { debounce } from '@ember/runloop';
import $ from 'jquery';
import { lt } from '@ember/object/computed';
import Component from '@ember/component';
import layout from '../templates/components/top-button';

export default Component.extend({
  layout,


  elementId: 'top-button',


  tagName: 'a',


  classNames: [
    'btn',
    'btn-lg',
    'btn-primary',
    'btn-circle',
    'position-fixed',
    'text-light',
    'd-print-none'
  ], // :classNames


  classNameBindings: ['invisible'],


  invisible: lt( 'yPosition', 300 ),


  init() {
    this._super( ...arguments );
    this.set( 'yPosition', 0 );
  },


  didInsertElement() {
    this._super( ...arguments );
    $( window ).on(
      'scroll',
      this.didScroll.bind(this)
    );
  },


  willDestroyElement() {
    this._super( ...arguments );
    $( window ).off(
      'scroll',
      this.didScroll.bind(this)
    );
  },


  didScroll() {
    debounce(
      this,
      'updatePosition',
      300
    );
  },


  updatePosition() {
    this.set( 'yPosition', window.scrollY );
  },


  click() {
    $( 'html,body' ).animate(
      {scrollTop:0},
      'slow'
    );
  }

});
