export function subtract(a, b) {
  return a - b
}

export const now = new Date()

export default {
  name: 'Chewie',
  height: `7' 6"`,
  age: 200,
  homePlanet: 'Kashyyyk',
}

/*
 * import chewie, {subtract, now} from './multiple-things'
 *
 * console.assert(chewie.age === 200)
 * console.assert(subtract(6, 3) === 3)
 * console.assert(now instanceof Date)
 */
