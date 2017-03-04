import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('froala-editor', 'Integration | Component | froala editor', {
  integration: true
});



test("'on-initialized' event action is firing", function(assert) {

  this.set('runAssert', () => {
    assert.ok(true);
  });

  this.render(hbs`{{froala-editor on-initialized=(action runAssert)}}`);

});



test('.fr-box class is applied', function(assert) {

  this.set('runAssert', component => {
    assert.ok(component.$(component.get('editorSelector')).hasClass('fr-box'));
  });

  this.render(hbs`{{froala-editor on-initialized=(action runAssert)}}`);

});



test("'content' attribute is set as editor content", function(assert) {

  let foobar = '<p>Foobar</p>';

  this.set('runAssert', component => {
    assert.equal(component.get('editor').html.get(), foobar);
  });

  this.set('foobar', foobar);

  this.render(hbs`{{froala-editor content=foobar on-initialized=(action runAssert)}}`);

});



test("positional param 'content' attribute is set as editor content", function(assert) {

  let foobar = '<p>Foobar</p>';

  this.set('runAssert', component => {
    assert.equal(component.get('editor').html.get(), foobar);
  });

  this.set('foobar', foobar);

  this.render(hbs`{{froala-editor foobar on-initialized=(action runAssert)}}`);

});



test("'update' action fires after input", function(assert) {

  this.set('triggerContentChanged', component => {
    component.get('editor').events.trigger('contentChanged');
  });

  this.set('runAssert', () => {
    assert.ok(true);
  });

  this.render(hbs`{{froala-editor on-initialized=(action triggerContentChanged) update=(action runAssert)}}`);

});



test("positional param 'update' action fires after input", function(assert) {

  this.set('triggerContentChanged', component => {
    component.get('editor').events.trigger('contentChanged');
  });

  this.set('runAssert', () => {
    assert.ok(true);
  });

  this.render(hbs`{{froala-editor "foobar" (action runAssert) on-initialized=(action triggerContentChanged)}}`);

});



test("'update' action fires for a different 'updateEvent'", function(assert) {

  this.set('triggerContentChanged', component => {
    component.get('editor').events.trigger('keyPress');
  });

  this.set('runAssert', () => {
    assert.ok(true);
  });

  this.render(hbs`{{froala-editor on-initialized=(action triggerContentChanged) update=(action runAssert) updateEvent="keyPress"}}`);

});



test("'theme' option applies the proper class", function(assert) {

  this.set('runAssert', component => {
    // This is brittle, find a better way to detect that an option has been applied
    assert.ok(component.$(component.get('editorSelector')).hasClass('red-theme'));
  });

  this.render(hbs`{{froala-editor options=(hash theme="red") on-initialized=(action runAssert)}}`);

});



test("'theme' attribute applies the proper class", function(assert) {

  this.set('runAssert', component => {
    // This is brittle, find a better way to detect that an option has been applied
    assert.ok(component.$(component.get('editorSelector')).hasClass('red-theme'));
  });

  this.render(hbs`{{froala-editor theme="red" on-initialized=(action runAssert)}}`);

});



test("positional param options, 'theme' applies the proper class", function(assert) {

  this.set('foobar', '<p>foobar</p>');

  this.set('runAssert', component => {
    // This is brittle, find a better way to detect that an option has been applied
    assert.ok(component.$(component.get('editorSelector')).hasClass('red-theme'));
  });

  this.render(hbs`{{froala-editor foobar (action (mut foobar)) (hash theme="red") on-initialized=(action runAssert)}}`);

});



test('SafeString in, SafeString out (via *-getHtml event handler)', function(assert) {

  this.set('runAssert', html => {
    assert.ok(Ember.String.isHTMLSafe(html));
  });

  this.set('safestring', Ember.String.htmlSafe('<p>This is safe!</p>'));

  this.render(hbs`{{froala-editor content=safestring on-initialized-getHtml=(action runAssert)}}`);

});



test('*-getHtml event handler should return a string as the first param', function(assert) {

  this.set('runAssert', html => {
    assert.ok(typeof html === 'string');
  });

  this.render(hbs`{{froala-editor on-initialized-getHtml=(action runAssert)}}`);

});



test("component 'method' properly fires the related editors method", function(assert) {

  let foobar = '<p>Foobar</p>';

  this.set('runAssert', component => {
    assert.equal(component.method('html.get'), foobar);
  });

  this.set('foobar', foobar);

  this.render(hbs`{{froala-editor content=foobar on-initialized=(action runAssert)}}`);

});



test("'.extend()'ed 'options' are properly applied", function(assert) {

  this.set('runAssert', component => {
    assert.equal(component.get('_options.theme'), 'red');
  });

  // See tests/dummy/app/components/extended-froala-editor.js
  this.render(hbs`{{extended-froala-editor on-initialized=(action runAssert)}}`);

});



test("'.extend()'ed option attributes are properly applied", function(assert) {
  // Note: This is NOT an ideal strategy when applying default options, use options:{} instead

  this.set('runAssert', component => {
    assert.ok(component.get('_options.charCounterCount') === false);
  });

  // See tests/dummy/app/components/extended-froala-editor.js
  this.render(hbs`{{extended-froala-editor on-initialized=(action runAssert)}}`);

});



test("'.extend()'ed 'options' can be overridden by 'options' hash", function(assert) {

  this.set('runAssert', component => {
    assert.equal(component.get('_options.theme'), 'royal');
  });

  // See tests/dummy/app/components/extended-froala-editor.js
  this.render(hbs`{{extended-froala-editor options=(hash theme="royal") on-initialized=(action runAssert)}}`);

});



test("'.extend()'ed 'opitons' can be overridden by attribute options", function(assert) {

  this.set('runAssert', component => {
    assert.equal(component.get('_options.theme'), 'royal');
  });

  // See tests/dummy/app/components/extended-froala-editor.js
  this.render(hbs`{{extended-froala-editor theme="royal" on-initialized=(action runAssert)}}`);

});



test("'.extend()'ed 'options' are not completely overwritten by 'options' hash", function(assert) {

  this.set('runAssert', component => {
    assert.ok(component.get('_options.toolbarSticky') === false);
  });

  // See tests/dummy/app/components/extended-froala-editor.js
  this.render(hbs`{{extended-froala-editor options=(hash theme="royal") on-initialized=(action runAssert)}}`);

});



test("event action added while '.extend()'ing are properly triggered", function(assert) {

  this.set('triggerContentChanged', component => {
    component.get('editor').events.trigger('contentChanged');
  });

  this.set('runAssert', () => {
    assert.ok(true);
  });

  // See tests/dummy/app/components/extended-froala-editor.js
  this.render(hbs`{{extended-froala-editor on-initialized=(action triggerContentChanged) runAssert=runAssert}}`);

});



test("options defined by '.extend()'ing can be overridden by instances separately", function(assert) {
  assert.expect(2);

  this.set('runAssertA', component => {
    assert.equal(component.get('_options.theme'), 'royal');
  });

  this.set('runAssertB', component => {
    assert.equal(component.get('_options.theme'), 'dark');
  });

  // See tests/dummy/app/components/extended-froala-editor.js
  this.render(hbs`{{extended-froala-editor options=(hash theme="royal") on-initialized=(action runAssertA)}}{{extended-froala-editor options=(hash theme="dark") on-initialized=(action runAssertB)}}`);

});



test("instance options are not shared across all instances", function(assert) {
  assert.expect(4);

  this.set('runAssertA', component => {
    assert.ok(component.get('_options.disableRightClick'));
    assert.notOk(component.get('_options.editInPopup'));
  });

  this.set('runAssertB', component => {
    assert.notOk(component.get('_options.disableRightClick'));
    assert.ok(component.get('_options.editInPopup'));
  });

  // See tests/dummy/app/components/extended-froala-editor.js
  this.render(hbs`{{extended-froala-editor options=(hash disableRightClick=true) on-initialized=(action runAssertA)}}{{extended-froala-editor options=(hash editInPopup=true) on-initialized=(action runAssertB)}}`);

});
