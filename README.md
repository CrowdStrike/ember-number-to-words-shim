ember-number-to-words-shim
==============================================================================

[![npm version](https://badge.fury.io/js/ember-number-to-words-shim.svg)](https://badge.fury.io/js/ember-number-to-words-shim)
[![Build Status](https://travis-ci.org/CrowdStrike/ember-number-to-words-shim.svg?branch=master)](https://travis-ci.org/CrowdStrike/ember-number-to-words-shim)

[Ember.js](https://www.emberjs.com) [number-to-words](https://github.com/marlun78/number-to-words) shim

Installation
------------------------------------------------------------------------------

```
ember install ember-number-to-words-shim
```


Usage
------------------------------------------------------------------------------

```js
import Controller from '@ember/controller';
import converter from 'number-to-words';

export default Controller.extend({
  words: converter.toWords(1)
});
```


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-number-to-words-shim`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
