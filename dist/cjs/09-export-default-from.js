'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _otherModule = require('./other-module');

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_otherModule).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }