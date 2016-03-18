(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['./animals'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('./animals'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.animals);
    global.importDefault = mod.exports;
  }
})(this, function (_animals) {
  'use strict';

  var _animals2 = _interopRequireDefault(_animals);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});