import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('froala-editor', 'Integration | Component | froala editor', {
  integration: true
});



test('.fr-box class is applied', function(assert) {

  this.set('runAsserts', () => {
    assert.ok(this.$().find('.fr-box').length);
  });

  this.render(hbs`{{froala-editor on-initialized=runAsserts}}`);

});



test('content attribute is set as editor content', function(assert) {

  let foobar = '<p>Foobar</p>';

  this.set('runAsserts', (event, component) => {
    assert.equal(component.get('editor').html.get(), foobar);
  });

  this.set('foobar', foobar);

  this.render(hbs`{{froala-editor content=foobar on-initialized=runAsserts}}`);

});



// test('content attribute binding is working', function(assert) {});
// test('updating content attribute updates editor content', function(assert) {});
// test('changing defaultContent works', function(assert) {});
// test('options and defaultOptions are merged, with options taking priority', function(assert) {});
// test('SafeString in, SafeString out', function(assert) {});



test('SafeString in, SafeString out (via *-getHtml event handler)', function(assert) {

  this.set('runAsserts', html => {
    assert.ok(html instanceof Ember.Handlebars.SafeString);
  });

  this.set('safestring', Ember.String.htmlSafe('<p>This is safe!</p>'));

  this.render(hbs`{{froala-editor content=safestring on-initialized-getHtml=runAsserts}}`);

});



test('*-getHtml event handler should return a string as the first param', function(assert) {

  this.set('runAsserts', html => {
    assert.ok(typeof html === 'string');
  });

  this.render(hbs`{{froala-editor on-initialized-getHtml=runAsserts}}`);

});
