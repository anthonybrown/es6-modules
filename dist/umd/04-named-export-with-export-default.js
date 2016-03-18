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
    global.namedExportWithExportDefault = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.subtract = subtract;
  function subtract(a, b) {
    return a - b;
  }

  var now = exports.now = new Date();

  exports.default = {
    name: 'Chewie',
    height: '7\' 6"',
    age: 200,
    homePlanet: 'Kashyyyk'
  };
});