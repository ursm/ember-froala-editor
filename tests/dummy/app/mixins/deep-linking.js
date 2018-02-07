import $ from 'jquery';
import { observer } from '@ember/object';
import { scheduleOnce } from '@ember/runloop';
import { on } from '@ember/object/evented';
import Mixin from '@ember/object/mixin';


// Just a quick-n-dirty way to enable deep-linking
// Yes, it could be done better...
export default Mixin.create({

  // Use a query param for deep linking
  queryParams : ['section'],
  section     : '',


  // Watch for changes to the query param...
  sectionDidInit: on('init', function(){
    if ( !this.get('section') ) {
      return; // Default, no deep-linking
    }
    scheduleOnce('afterRender', this, this.instantScrollToSection);
  }),
  sectionDidChange: observer('section', function(){
    if ( !this.get('section') ) {
      return; // Default, no deep-linking
    }
    scheduleOnce('afterRender', this, this.animatedScrollToSection);
  }),


  // Scroll to the selected section
  instantScrollToSection() {
    let $section = $( 'section#' + this.get('section') );
    if ( $section.length === 0 ) {
      return; // Section not found..
    }
    let pos = $section.offset().top - 64 - 12 - 0.5;
    $('html, body').scrollTop( pos );
  },
  animatedScrollToSection() {
    let $section = $( 'section#' + this.get('section') );
    if ( $section.length === 0 ) {
      return; // Section not found..
    }
    let pos = $section.offset().top - 64 - 12 - 0.5;
    $('html, body').animate(
      {scrollTop:pos},
      'slow'
    );
  }

});
