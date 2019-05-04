// const factorial = require('./app');

function factorial(n) {
  if (n < 2) return 1;
  return n * factorial(n - 1);
}

test('should do factorials', () => {
  expect(factorial(1)).toBe(1);
  expect(factorial(2)).toBe(2);
  expect(factorial(3)).toBe(6);
  expect(factorial(10)).toBe(3628800);
});
