import Ember from 'ember';
import layout from '../templates/components/froala-content';


const FroalaContentComponent = Ember.Component.extend({
  layout,
  classNames: ['fr-view']
});


FroalaContentComponent.reopenClass({
  positionalParams: ['content']
});


export default FroalaContentComponent;
