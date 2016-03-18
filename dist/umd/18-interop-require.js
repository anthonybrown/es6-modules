(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['./cool-catz', 'lodash'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('./cool-catz'), require('lodash'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.coolCatz, global.lodash);
    global.interopRequire = mod.exports;
  }
})(this, function (_coolCatz, _lodash) {
  'use strict';

  var _coolCatz2 = _interopRequireDefault(_coolCatz);

  var _lodash2 = _interopRequireDefault(_lodash);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /*
   * // ./cool-catz.js
   * export default ['Ben Lesh', 'Brian Holt']
   * export const favoriteTech = 'RxJS'
   */


  console.log(_lodash2.default);
  // the lodash object
  console.log(_lodash.get);
  // get function
  console.log(_coolCatz2.default);
  // ['Ben Lesh', 'Brian Holt']
  console.log(_coolCatz.favoriteTech);
  // RxJS
});