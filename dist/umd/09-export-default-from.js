(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './other-module'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./other-module'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.otherModule);
    global.exportDefaultFrom = mod.exports;
  }
})(this, function (exports, _otherModule) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_otherModule).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});