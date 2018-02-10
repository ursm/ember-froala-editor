import { equal } from '@ember/object/computed';
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
    'position-fixed',
    'text-light',
    'd-print-none',
    'd-inline-blick',
    'd-md-none'
  ], // :classNames


  classNameBindings: ['invisible'],


  router: service(),


  invisible: equal('router.currentRouteName', 'index'),


  click() {
    let router      = this.get('router');
    let currentPath = router.get('currentRouteName');
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
