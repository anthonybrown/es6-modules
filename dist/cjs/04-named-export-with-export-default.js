'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subtract = subtract;
function subtract(a, b) {
  return a - b;
}

var now = exports.now = new Date();

exports.default = {
  name: 'Chewie',
  height: '7\' 6"',
  age: 200,
  homePlanet: 'Kashyyyk'
};

/*
 * import chewie, {subtract, now} from './multiple-things'
 *
 * console.assert(chewie.age === 200)
 * console.assert(subtract(6, 3) === 3)
 * console.assert(now instanceof Date)
 */