'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _otherModule = require('./other-module');

Object.keys(_otherModule).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _otherModule[key];
    }
  });
});

var _anotherOtherModule = require('./another-other-module');

Object.keys(_anotherOtherModule).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _anotherOtherModule[key];
    }
  });
});