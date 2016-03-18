const lifeAndTheUniverse = 42

function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}


// ultimate troll :-P
export {add as subtract, subtract as add, lifeAndTheUniverse}


/*
 * import {add, subtract, lifeAndTheUniverse} from './list-of-exports'
 *
 * console.assert(subtract(3, 4) === 7) // (╯°□°)╯︵ ┻━┻
 * console.assert(add(4, 3) === 1) // ¯\_(ツ)_/¯
 * console.assert(lifeAndTheUniverse === 42)
 */

