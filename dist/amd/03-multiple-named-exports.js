define(["exports"], function (exports) {
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