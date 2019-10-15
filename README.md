# Ember Froala Editor Addon

[![Build Status](https://travis-ci.org/froala/ember-froala-editor.svg?branch=master)](https://travis-ci.org/froala/ember-froala-editor)
[![Ember Observer Score](http://emberobserver.com/badges/ember-froala-editor.svg)](http://emberobserver.com/addons/ember-froala-editor)
[![npm](https://img.shields.io/npm/dm/ember-froala-editor.svg)](https://www.npmjs.com/package/ember-froala-editor)
[![Join the chat at https://gitter.im/froala/ember-froala-editor](https://badges.gitter.im/froala/ember-froala-editor.svg)](https://gitter.im/froala/ember-froala-editor?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![npm](https://img.shields.io/npm/v/ember-froala-editor.svg)](https://www.npmjs.com/package/ember-froala-editor)


> Bring the [Froala WYSIWYG Editor](https://www.froala.com/wysiwyg-editor)
into an ember-cli project with this addon. Besides importing the required
Froala Editor files, the _main_ part of this addon is the `<FroalaEditor />`
component. Checkout the [documentation Website](http://www.emberwysiwygeditor.com/)
for installation, configuration, and usage details.


## Compatibility

ember 3.13+
ember-cli 2.15.0+


## Installation

```bash
ember install ember-froala-editor
```


## Configuration

Take a look at the [configuration documentation page](http://www.emberwysiwygeditor.com/#/addon/configuration)
for details on the exact configuration options. But basically you add
`'ember-froala-editor':{}` within your `ember-cli-build.js` file and adjust
the available configuration options. Ex:

```js
// ember-cli-build.js
// ... (snip)

  'ember-froala-editor': {
    languages: ['es','fr','de'],
    plugins  : true,
    themes   : 'royal'
  },

// ... (snip)
```


## Usage

TBD


## Test Helper

TBD


## License

The `ember-froala-editor` project is under MIT license. However, in order
to use Froala WYSIWYG HTML Editor plugin you must purchase a license for it.

Froala Editor has [3 different licenses](http://froala.com/wysiwyg-editor/pricing) for commercial use.
For details please see [License Agreement](http://froala.com/wysiwyg-editor/terms).
