const app = "I don't do much.";
function multiplier(a, b) {
  return a * b;
}


const doubler = multiplier.bind(null, 2);
 
// Now we can use doubler like this:
console.log(doubler(5)); // prints 10
