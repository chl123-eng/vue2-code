(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.vue = factory());
})(this, (function () { 'use strict';

    function Vue() {
      console.log("hello world");
    }

    return Vue;

}));
