import FroalaEditorComponent from 'ember-froala-editor/components/froala-editor';

export default FroalaEditorComponent.extend({

  // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
  options : {
    theme         : "red",
    toolbarSticky : false
  },

  // NOT ideal when applying default options,
  // use the options:{} example above instead
  charCounterCount : false,

  'on-contentChanged' : function() {
    let runAssert = this.get('runAssert');
    if ( typeof runAssert === 'function' ) {
      runAssert();
    }
  }

});
