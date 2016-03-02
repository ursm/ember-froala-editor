import Ember from 'ember';
import layout from '../templates/components/back-button';

export default Ember.Component.extend({
  layout,


  elementId: 'back-button',


  tagName: 'a',


  classNames: [
    'btn',
    'btn-lg',
    'btn-danger',
    'btn-circle',
    'visible-xs-inline-block'
  ], // :classNames


  classNameBindings: ['invisible'],


  routing: Ember.inject.service('-routing'),
  router: Ember.computed.alias('routing.router'),


  invisible: Ember.computed.equal('router.currentPath', 'index'),


  click() {
    let router      = this.get('router');
    let currentPath = router.get('currentPath');
    let pathArray   = currentPath.split('.');

    // Remove the last element of the array
    // If the last element was 'index', remove the next level...
    if ( pathArray.pop() === 'index' ) {
      pathArray.pop();
    }

    // Append the index path,
    // technically not needed...
    pathArray.push('index');

    // Navigate to the parent page
    router.transitionTo(
      pathArray.join('.')
    );
  }


});
