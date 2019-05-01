'use strict';

const path = require('path');

module.exports = {
  name: require('./package').name,

  included() {
    this._super.included.apply(this, arguments);

    let peerDependencyPath = path.resolve(path.dirname(require.resolve('number-to-words')), '../numberToWords.js')
      .match(/\/(node_modules\/.+)/)[1];

    this.import(peerDependencyPath);
    this.import('vendor/shims/number-to-words.js');
  }
};
