"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var lifeAndTheUniverse = 42;

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// ultimate troll :-P
exports.subtract = add;
exports.add = subtract;
exports.lifeAndTheUniverse = lifeAndTheUniverse;

/*
 * import {add, subtract, lifeAndTheUniverse} from './list-of-exports'
 *
 * console.assert(subtract(3, 4) === 7) // (╯°□°)╯︵ ┻━┻
 * console.assert(add(4, 3) === 1) // ¯\_(ツ)_/¯
 * console.assert(lifeAndTheUniverse === 42)
 */