// ./module
/*
 * // ./other-module
 * export const foo = 'foo'
 *
 * // ./another-other-module
 * export const bar = 'bar'
 */
export * from './other-module'
export * from './another-other-module'

/*
 * import {foo, bar} from './module'
 * console.assert(foo === 'foo')
 * console.assert(bar === 'bar')
 */
