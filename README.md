# Ember Froala Editor Addon  [![Ember Observer Score](http://emberobserver.com/badges/ember-froala-editor.svg)](http://emberobserver.com/addons/ember-froala-editor) [![Join the chat at https://gitter.im/froala/ember-froala-editor](https://badges.gitter.im/froala/ember-froala-editor.svg)](https://gitter.im/froala/ember-froala-editor?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


>Bring the [Froala WYSIWYG Editor](https://www.froala.com/wysiwyg-editor)
into an ember-cli project with this addon. Besides importing the required
Froala Editor files, the _main_ part of this addon is the `{{froala-editor}}`
component. Checkout the [documentation Website](http://froala.github.io/ember-froala-editor/)
for installation, configuration, and usage details.


## Compatibility

ember and ember-cli 2.3+

### Breaking changes between v2.3.5 and v2.4.0!!!

Because the version of this addon aligns with the froala-editor version,
we could not release a new major version "out-of-line". Please note the
following _breaking_ changes to the `{{froala-editor}}` component;

* `content` is no longer updated by the editor, instead use an action to update the value. Ex:
  * From: `{{froala-editor content=myProp}}`
  * To: `{{froala-editor content=myProp update=(action (mut myProp))}}`
  * Alternate, "new" positional params option: `{{froala-editor myProp (action (mut myProp))}}`
* `options` changed post-initialization no longer updates the editor, instead use the related [froala-editor methods](https://www.froala.com/wysiwyg-editor/docs/methods)
* Event handlers/actions `on-*=(action)` no longer receive an "event" object as the first arg, due to a change in event management. Change your action signatures;
  * From: `function( eventObject, editorComponenet, ...params ){}`
  * To: `function( editorComponenet, ...params ){}`
  * Similarly for the `on-*-getHtml` actions, but the `eventObject` is the second argument
* `contentBindingEvent` option has been removed, in related to the above `content` change
* `defaultContent` option has been removed, it was deemed unneeded and content is now set directly on the editor
* Previously undocumented `isSafeString` option was renamed to `returnSafeString`

`content` mutation was removed because it better aligns with ember's direction for "data down, actions up"
(similar to [`ember-one-way-controls`](https://github.com/DockYard/ember-one-way-controls)).
This and unmutable `options` also removed the need to maintain other complex state management.

## Installation

```bash
ember install ember-froala-editor
```

## Configuration

Take a look at the [configuration documentation page](http://froala.github.io/ember-froala-editor/#addon/configuration)
for details on the exact configuration options. But basically you add
`'ember-froala-editor':{}` within your `ember-cli-build.js` file and adjust
the available configuration options. Ex:

```js
// ember-cli-build.js
// ... (snip)

  'ember-froala-editor': {
    plugins  : true,
    languages: ['es','fr','de'],
    themes   : 'royal'
  },

// ... (snip)
```


## Usage

Take a look at the [documentation Website](http://froala.github.io/ember-froala-editor/)
for full usage details. But basically this addon comes with a few Ember
Components and Helpers to use within your project templates.

```hbs
{{froala-editor}}
{{froala-content}}
```

```hbs
(froala-method)
(merged-hash)
```


## Development

* `git clone` this repository (fork if you plan on submitting a PR)
* `npm install`
* `bower install`


## Running Docs Server

* `ember server`
* Visit the docs at http://localhost:4200


## Running Tests

* `npm test` (Runs `ember try:testall` to test against multiple Ember versions)
* `ember test`
* `ember test --server`
* `ember server` (Visit tests at http://localhost:4200/tests)


## Releasing

_Notes to self_ really...

1. If bumping the `froala-wysiwyg-editor` version, update both `bower.json` and `blueprints/ember-froala-editor/index.json`
2. `npm version x.y.z` - Updates the version in `package.json` and tags in git
3. `git push origin master --follow-tags` - Pushes any changes and the new version tag up to Github
4. Update the new tag on the [Github Releases page](https://github.com/froala/ember-froala-editor/releases)
5. `npm run deploy` - Deploys the docs to `gh-pages` using [ember-cli-github-pages](https://github.com/poetic/ember-cli-github-pages#how-can-i-create-an-automated-deploy-script)
  - May need to `git push`, deploy will say if this is needed
6. `git checkout master` - Need to switch back to `master` after deploying the docs..
7. `npm publish` - Release the new version to the world!


For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).


## License

The `ember-froala-editor` project is under MIT license. However, in order to use Froala WYSIWYG HTML Editor plugin you should purchase a license for it.

Froala Editor has [3 different licenses](http://froala.com/wysiwyg-editor/pricing) for commercial use.
For details please see [License Agreement](http://froala.com/wysiwyg-editor/terms).
