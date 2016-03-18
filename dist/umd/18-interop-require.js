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
   */


  console.log(_lodash2.default);
  console.log(_lodash.get);
  console.log(_coolCatz2.default);
  console.log(_coolCatz.thing);
  // ['Ben Lesh', 'Brian Holt']
});