(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['./animals'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('./animals'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.animals);
    global.defaultAndNamedImports = mod.exports;
  }
})(this, function (_animals) {
  'use strict';

  var _animals2 = _interopRequireDefault(_animals);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  console.assert(_animals2.default.cats.length === 3); /*
                                                        * // ./animals
                                                        * const animals = {cats: ['frank', 'bobby', 'catherine']}
                                                        * const randomCat = () => animals.cats[Math.floor(Math.random() * animals.cats.length)]
                                                        * const addCat = cat => animals.cats.push(cat)
                                                        *
                                                        * export {animals as default, randomCat, addCat}
                                                        */

  console.assert(typeof (0, _animals.randomCat)() === 'string');
  (0, _animals.addCat)('francis');
  console.assert(_animals2.default.cats.length === 4);
});