'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sayHi = require('./say-hi');

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_sayHi).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }