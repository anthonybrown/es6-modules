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

exports.add = add;
exports.subtract = subtract;
exports.lifeAndTheUniverse = lifeAndTheUniverse;

/*
 * import {add, subtract, lifeAndTheUniverse} from './list-of-exports'
 *
 * console.assert(add(3, 4) === 7)
 * console.assert(subtract(4, 3) === 1)
 * console.assert(lifeAndTheUniverse === 42)
 */