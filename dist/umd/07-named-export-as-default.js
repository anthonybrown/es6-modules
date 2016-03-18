(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.namedExportAsDefault = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  function subtract(a, b) {
    return a - b;
  }

  var now = new Date();

  var chewie = {
    name: 'Chewie',
    height: '7\' 6"',
    age: 200,
    homePlanet: 'Kashyyyk'
  };

  exports.subtract = subtract;
  exports.now = now;
  exports.default = chewie;
});