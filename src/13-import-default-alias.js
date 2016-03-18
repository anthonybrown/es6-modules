/*
 * // ./animals
 * export default ['zebra', 'kangaroo']
 */
import {default as animals} from './animals'
import otherAnimals from './animals'

console.assert(animals === otherAnimals)

