import Ember from 'ember';


// Just a quick-n-dirty way to enable deep-linking
// Yes, it could be done better...
export default Ember.Mixin.create({

  // Use a query param for deep linking
  queryParams : ['section'],
  section     : '',


  // Watch for changes to the query param...
  sectionDidInit: Ember.on('init', function(){
    if ( !this.get('section') ) {
      return; // Default, no deep-linking
    }
    Ember.run.scheduleOnce('afterRender', this, this.instantScrollToSection);
  }),
  sectionDidChange: Ember.observer('section', function(){
    if ( !this.get('section') ) {
      return; // Default, no deep-linking
    }
    Ember.run.scheduleOnce('afterRender', this, this.animatedScrollToSection);
  }),


  // Scroll to the selected section
  instantScrollToSection() {
    let $section = Ember.$( 'section#' + this.get('section') );
    if ( $section.length === 0 ) {
      return; // Section not found..
    }
    let pos = $section.offset().top - 64 - 12 - 0.5;
    Ember.$('html, body').scrollTop( pos );
  },
  animatedScrollToSection() {
    let $section = Ember.$( 'section#' + this.get('section') );
    if ( $section.length === 0 ) {
      return; // Section not found..
    }
    let pos = $section.offset().top - 64 - 12 - 0.5;
    Ember.$('html, body').animate(
      {scrollTop:pos},
      'slow'
    );
  }

});
