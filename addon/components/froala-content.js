import Component from '@glimmer/component';
import { setComponentTemplate } from '@ember/component';
import layout from '../templates/components/froala-content';

export class FroalaContentComponent extends Component {}

export default setComponentTemplate(layout, FroalaContentComponent);
