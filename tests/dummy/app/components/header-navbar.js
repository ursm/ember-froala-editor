import { schedule } from '@ember/runloop';
import Component from '@ember/component';
import layout from '../templates/components/header-navbar';

export default Component.extend({
  layout,


  tagName: 'header',


  classNames: [
    'navbar',
    'navbar-expand-md',
    'navbar-light',
    'bg-white',
    'fixed-top',
    'p-0'
  ], // :classNames


  didInsertElement() {
    this._super( ...arguments );
    schedule('afterRender', this, function(){
      this.$().on( 'click', 'a', this.collapseNavbar.bind(this) );
    });
  },


  willDestroyElement() {
    this._super( ...arguments );
    this.$().off( 'click', 'a', this.collapseNavbar.bind(this) );
  },


  collapseNavbar() {
    let $collapse = this.$().find('.navbar-collapse');
    if ( $collapse.hasClass('show') ) { // If .navbar-collapse is "open"
      $collapse.collapse('hide');   // then close the navbar
    }
  }

});
