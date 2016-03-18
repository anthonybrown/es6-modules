(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['./cool-catz'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('./cool-catz'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.coolCatz);
    global.importDefault = mod.exports;
  }
})(this, function (_coolCatz) {
  'use strict';

  var _coolCatz2 = _interopRequireDefault(_coolCatz);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  console.log(_coolCatz2.default);
  // ['Ben Lesh', 'Brian Holt']
  /*
   * // ./cool-catz.js
   * export default ['Ben Lesh', 'Brian Holt']
   */
});