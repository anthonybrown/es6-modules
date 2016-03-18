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
    global.multipleNamedExports = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.subtract = subtract;
  function subtract(a, b) {
    return a - b;
  }

  var now = exports.now = new Date();

  /*
   * import {subtract, now} from './stuff'
   * console.assert(subtract(4, 2) === 2)
   * console.assert(now instanceof Date)
   */
});