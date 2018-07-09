(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': self['numberToWords'],
      __esModule: true,
    };
  }

  define('number-to-words', [], vendorModule);
})();
