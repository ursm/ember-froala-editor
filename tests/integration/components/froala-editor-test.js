import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('froala-editor', 'Integration | Component | froala editor', {
  integration: true
});

test('.fr-box class is applied', function(assert) {

  this.set('runAsserts', () => {
    // TODO: For some reason this.$() is not reflecting changes made by froala...
    assert.equal(this.$().hasClass('fr-box'), true, ".hasClass('fr-box')");
  });

  this.render(hbs`{{froala-editor on-initialized=runAsserts}}`);

});
