export default function(){

  this.transition(
    this.toRoute('index'),
    this.use('crossFade')
  );

  this.transition(
    this.toRoute('addon'),
    this.use('crossFade')
  );

  this.transition(
    this.toRoute('addon.index'),
    this.use('crossFade')
  );

  this.transition(
    this.toRoute('addon.installation'),
    this.use('crossFade')
  );

  this.transition(
    this.toRoute('addon.configuration'),
    this.use('crossFade')
  );

  this.transition(
    this.toRoute('addon.concepts'),
    this.use('crossFade')
  );

  this.transition(
    this.toRoute('addon-components'),
    this.use('crossFade')
  );

  this.transition(
    this.toRoute('addon-components.index'),
    this.use('crossFade')
  );

  this.transition(
    this.toRoute('addon-components.froala-editor'),
    this.use('crossFade')
  );

  this.transition(
    this.toRoute('addon-components.froala-content'),
    this.use('crossFade')
  );

  this.transition(
    this.toRoute('addon-helpers'),
    this.use('crossFade')
  );

  this.transition(
    this.toRoute('addon-helpers.index'),
    this.use('crossFade')
  );

  this.transition(
    this.toRoute('addon-helpers.froala-method'),
    this.use('crossFade')
  );

  this.transition(
    this.toRoute('addon-helpers.merged-hash'),
    this.use('crossFade')
  );

}
