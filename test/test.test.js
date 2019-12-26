// var assert = require('assert');
// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function(){
//       assert.equal(-1, [1,2,3].indexOf(4));
//     });
//   });
// });

// function pow(x, n) {
//       if (n < 0) return NaN;
//   if (Math.round(n) != n) return NaN;

//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }

  // return result;
  //      Здесь будет реализация функции, пока пусто 
  //   }

describe("pow", function() {

  describe("возводит x в степень 3", function() {

    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} в степени 3 будет ${expected}`, function() {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }

  });

  // ... другие тесты. Можно писать и describe, и it блоки.
  it("для отрицательных n возвращает NaN", function() {
    assert.isNaN(pow(2, -1));
  });

  it("для дробных n возвращает NaN", function() {
    assert.isNaN(pow(2, 1.5));
  });
});