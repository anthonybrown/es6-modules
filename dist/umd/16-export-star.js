(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './other-module', './another-other-module'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./other-module'), require('./another-other-module'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.otherModule, global.anotherOtherModule);
    global.exportStar = mod.exports;
  }
})(this, function (exports, _otherModule, _anotherOtherModule) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_otherModule).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _otherModule[key];
      }
    });
  });
  Object.keys(_anotherOtherModule).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _anotherOtherModule[key];
      }
    });
  });
});