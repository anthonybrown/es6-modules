(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.namedExportsAsList = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var lifeAndTheUniverse = 42;

  function add(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
  }

  exports.add = add;
  exports.subtract = subtract;
  exports.lifeAndTheUniverse = lifeAndTheUniverse;
});