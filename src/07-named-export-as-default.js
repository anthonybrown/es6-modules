function subtract(a, b) {
  return a - b
}

const now = new Date()

const chewie = {
  name: 'Chewie',
  height: `7' 6"`,
  age: 200,
  homePlanet: 'Kashyyyk',
}

export {subtract, now, chewie as default}

/*
 * import chewie, {subtract, now} from './multiple-things'
 *
 * console.assert(chewie.age === 200)
 * console.assert(subtract(6, 3) === 3)
 * console.assert(now instanceof Date)
 */
