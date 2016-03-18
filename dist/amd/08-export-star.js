define(['exports', './other-module', './another-other-module'], function (exports, _otherModule, _anotherOtherModule) {
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