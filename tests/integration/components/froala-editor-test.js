import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import isHTMLSafe from 'ember-string-ishtmlsafe-polyfill';

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
    assert.ok(component.$().hasClass('fr-box'));
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
    assert.ok(component.$().hasClass('red-theme'));
  });

  this.render(hbs`{{froala-editor options=(hash theme="red") on-initialized=(action runAssert)}}`);

});



test("'theme' attribute applies the proper class", function(assert) {

  this.set('runAssert', component => {
    // This is brittle, find a better way to detect that an option has been applied
    assert.ok(component.$().hasClass('red-theme'));
  });

  this.render(hbs`{{froala-editor theme="red" on-initialized=(action runAssert)}}`);

});



test("positional param options, 'theme' applies the proper class", function(assert) {

  this.set('foobar', '<p>foobar</p>');

  this.set('runAssert', component => {
    // This is brittle, find a better way to detect that an option has been applied
    assert.ok(component.$().hasClass('red-theme'));
  });

  this.render(hbs`{{froala-editor foobar (action (mut foobar)) (hash theme="red") on-initialized=(action runAssert)}}`);

});



test('SafeString in, SafeString out (via *-getHtml event handler)', function(assert) {

  this.set('runAssert', html => {
    assert.ok(isHTMLSafe(html));
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
