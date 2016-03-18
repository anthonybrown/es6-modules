/*
 * // ./animals
 * const animals = {cats: ['frank', 'bobby', 'catherine']}
 * const randomCat = () => animals.cats[Math.floor(Math.random() * animals.cats.length)]
 * const addCat = cat => animals.cats.push(cat)
 *
 * export {animals as default, randomCat, addCat}
 */
import animals, {randomCat, addCat} from './animals'

console.assert(animals.cats.length === 3)
console.assert(typeof randomCat() === 'string')
addCat('francis')
console.assert(animals.cats.length === 4)

