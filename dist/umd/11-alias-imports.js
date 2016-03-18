(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['./math'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('./math'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.math);
    global.aliasImports = mod.exports;
  }
})(this, function (_math) {
  'use strict';

  // think about it for a second... :-)
  console.assert((0, _math.add)(3, 4) === (0, _math.subtract)(10, 3), 'math doesn\'t work'); /*
                                                                                              * // ./math.js
                                                                                              *
                                                                                              * // ... you get it...
                                                                                              * export {add, subtract}
                                                                                              */
});