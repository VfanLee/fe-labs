import _ from 'lodash'

const sum = (x, y) => x + y
const sub = (x, y) => x - y
const mul = (x, y) => x * y
const div = (x, y) => x / y

const map = (x, y) => _.map(x, y)

export default {
  sum,
  sub,
  mul,
  div,
  map,
}
