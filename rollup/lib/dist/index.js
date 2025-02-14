;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? (module.exports = factory(require('lodash')))
    : typeof define === 'function' && define.amd
    ? define(['lodash'], factory)
    : ((global = typeof globalThis !== 'undefined' ? globalThis : global || self), (global.MyLib = factory(global._)))
})(this, function (_) {
  'use strict'

  const sum = (x, y) => x + y
  const sub = (x, y) => x - y
  const mul = (x, y) => x * y
  const div = (x, y) => x / y

  const map = (x, y) => _.map(x, y)

  var index = {
    sum,
    sub,
    mul,
    div,
    map,
  }

  return index
})
