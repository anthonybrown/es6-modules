const lifeAndTheUniverse = 42

function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

export {add, subtract, lifeAndTheUniverse}

/*
 * import {add, subtract, lifeAndTheUniverse} from './list-of-exports'
 *
 * console.assert(add(3, 4) === 7)
 * console.assert(subtract(4, 3) === 1)
 * console.assert(lifeAndTheUniverse === 42)
 */
