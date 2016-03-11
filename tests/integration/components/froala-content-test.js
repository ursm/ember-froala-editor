import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('froala-content', 'Integration | Component | froala content', {
  integration: true
});

test('.fr-view class is applied', function(assert) {

  this.render(hbs`{{froala-content}}`);

  assert.ok(this.$().find('.fr-view').length);

});


test("'content' is output inside the block", function(assert) {

  this.render(hbs`{{froala-content content="foobar"}}`);

  assert.equal(this.$().text().trim(), 'foobar');

});


test("block content is properly yield'ed", function(assert) {

  this.render(hbs`{{#froala-content}}foobar{{/froala-content}}`);

  assert.equal(this.$().text().trim(), 'foobar');

});
