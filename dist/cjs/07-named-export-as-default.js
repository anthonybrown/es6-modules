'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function subtract(a, b) {
  return a - b;
}

var now = new Date();

var chewie = {
  name: 'Chewie',
  height: '7\' 6"',
  age: 200,
  homePlanet: 'Kashyyyk'
};

exports.subtract = subtract;
exports.now = now;
exports.default = chewie;

/*
 * import chewie, {subtract, now} from './multiple-things'
 *
 * console.assert(chewie.age === 200)
 * console.assert(subtract(6, 3) === 3)
 * console.assert(now instanceof Date)
 */