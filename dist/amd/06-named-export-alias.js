define(["exports"], function (exports) {
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

  // ultimate troll :-P
  exports.subtract = add;
  exports.add = subtract;
  exports.lifeAndTheUniverse = lifeAndTheUniverse;
});