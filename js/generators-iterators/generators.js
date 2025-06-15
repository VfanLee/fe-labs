let range = {
  from: 1,
  to: 5,

  // [Symbol.iterator]: function*() 的简写形式
  *[Symbol.iterator]() {
    for (let value = this.from; value <= this.to; value++) {
      yield value;
    }
  },
};

for (let num of range) {
  console.log(num); // 1, 2, 3, 4, 5
}
console.log([...range]); // [ 1, 2, 3, 4, 5 ]
