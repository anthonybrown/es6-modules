/*
 * // ./animals
 * const animals = {cats: ['frank', 'bobby', 'catherine']}
 * const randomCat = () => animals.cats[Math.floor(Math.random() * animals.cats.length)]
 * const addCat = cat => animals.cats.push(cat)
 *
 * export {animals as default, randomCat, addCat}
 */
import * as allAnimals from './animals'

console.assert(allAnimals.default.cats.length === 3)
console.assert(typeof allAnimals.randomCat() === 'string')
allAnimals.addCat('francis')
console.assert(allAnimals.default.cats.length === 4)

