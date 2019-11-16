import Controller from '@ember/controller';
import { htmlSafe } from '@ember/template';

export default Controller.extend({
  content: htmlSafe('<p>Foobar</p>')
});
