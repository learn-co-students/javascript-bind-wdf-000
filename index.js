
function multiplier(a, b) {
  return a * b;
}
var doubler = multiplier.bind(null, 3);

console.log(doubler(5)); // prints 15
