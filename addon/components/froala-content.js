import Component from '@glimmer/component';
import { isHTMLSafe, htmlSafe } from '@ember/template';

export default class FroalaContentComponent extends Component {

  get content() {
    return (
      isHTMLSafe(this.args.content) ?
      this.args.content :
      htmlSafe(this.args.content)
    );
  }

}
