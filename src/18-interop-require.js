/*
 * // ./cool-catz.js
 * export default ['Ben Lesh', 'Brian Holt']
 * export const favoriteTech = 'RxJS'
 */
import catz, {favoriteTech} from './cool-catz'
import _, {get} from 'lodash'

console.log(_)
// the lodash object
console.log(get)
// get function
console.log(catz)
// ['Ben Lesh', 'Brian Holt']
console.log(favoriteTech)
// RxJS

