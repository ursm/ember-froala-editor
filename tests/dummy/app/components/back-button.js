import { alias, equal } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import Component from '@ember/component';
import layout from '../templates/components/back-button';

export default Component.extend({
  layout,


  elementId: 'back-button',


  tagName: 'a',


  classNames: [
    'btn',
    'btn-lg',
    'btn-primary',
    'btn-circle',
    'hidden-print',
    'visible-xs-inline-block'
  ], // :classNames


  classNameBindings: ['invisible'],


  routing: service('-routing'),
  router: alias('routing.router'),


  invisible: equal('router.currentPath', 'index'),


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
