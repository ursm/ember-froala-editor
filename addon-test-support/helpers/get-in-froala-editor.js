import { registerHelper } from '@ember/test';
import { find } from '@ember/test-helpers';
// import FroalaEditor from 'froala-editor';

export default registerHelper('getInFroalaEditor', function(app, selector) {
  return getInFroalaEditor(selector);
});

export function getInFroalaEditor(selector) {

  let element = find(`${selector} [contenteditable]`) || find(selector);

  if (element === null) {
      throw `getInFroalaEditor(): DOM element not found with the selector '${selector}'`;
  }

  return element.innerHTML.trim();

  // let element = find(selector);

  // if (element === null) {
  //     throw `getInFroalaEditor(): DOM element not found with the selector '${selector}'`;
  // }

  // let editor = FroalaEditor.INSTANCES.find(instance => {
  //   if (instance['$oel'][0] === element) {
  //     return instance;
  //   }
  // });

  // return(
  //   editor ?
  //   editor.html.get() :
  //   element.innerHTML.trim()
  // );

}
