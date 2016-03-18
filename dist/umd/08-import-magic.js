(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['./magic'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('./magic'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.magic);
    global.importMagic = mod.exports;
  }
})(this, function () {
  'use strict';

  canIHazMagic('?'); /*
                      * // ./magic.js
                      *
                      * // this is super easy to understand right? (╯°□°)╯︵ ┻━┻
                      * global.canIHazMagic = s => s === '?' ? 'yes' : 'no'
                      */
});