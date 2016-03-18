define(['./cool-catz', 'lodash'], function (_coolCatz, _lodash) {
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