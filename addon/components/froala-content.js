import Component from '@ember/component';
import layout from '../templates/components/froala-content';


const FroalaContentComponent = Component.extend({
  layout,
  classNames: ['fr-view']
});


FroalaContentComponent.reopenClass({
  positionalParams: ['content']
});


export default FroalaContentComponent;
