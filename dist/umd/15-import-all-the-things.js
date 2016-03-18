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
    global.importAllTheThings = mod.exports;
  }
})(this, function (_animals) {
  'use strict';

  var allAnimals = _interopRequireWildcard(_animals);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  console.assert(allAnimals.default.cats.length === 3); /*
                                                         * // ./animals
                                                         * const animals = {cats: ['frank', 'bobby', 'catherine']}
                                                         * const randomCat = () => animals.cats[Math.floor(Math.random() * animals.cats.length)]
                                                         * const addCat = cat => animals.cats.push(cat)
                                                         *
                                                         * export {animals as default, randomCat, addCat}
                                                         */

  console.assert(typeof allAnimals.randomCat() === 'string');
  allAnimals.addCat('francis');
  console.assert(allAnimals.default.cats.length === 4);
});