import FroalaEditorComponent from 'ember-froala-editor/components/froala-editor';

export default FroalaEditorComponent.extend({

  defaultOptions : {
    initOnClick : true
  },

  'on-blur' : function() {
    this.reinitEditor();
  }

});
