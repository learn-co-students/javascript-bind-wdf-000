const app = "I don't do much.";

const myProfile = {
  id: 1382,
  firstName: 'Akuna',
  lastName: 'Matata',
  friends: [],
  getFriends() {
    fetch('http://api.example.com/1382/friends')
      .then(function (response) {
        return response.json();
      }) // the then() callback has its own scope so this doesn't refer to what we think
      .then(function (friends) {
        this.friends = friends;
      })
  }
}

// using a variable this way gets around the scoping issue
// but it isn't ideal
getFriends() {
  const self = this;
 
  fetch('http://api.example.com/1382/friends')
    .then(function (response) {
      return response.json();
    })
    .then(function (friends) {
      self.friends = friends;
    });
}

// using .bind() cleans things up
getFriends() {
  fetch('http://api.example.com/1382/friends')
    .then(function (response) {
      return response.json();
    })
    .then(function (friends) {
      this.friends = friends;
    }.bind(this));
}

// using arrow functions is even cleaner.
// Arrow functions will use the surrounding scope for 'this'
getFriends() {
  fetch('http://api.example.com/1382/friends')
    .then(response => response.json())
    .then(friends => this.friends = friends);
}

///////// PARTIAL APPLICATION

// multiply two numbers
function multiplier(a, b) {
  return a * b;
}

// Rather than always typing multipler(2, x) we can use .bind() to partually apply
// our function and create a new one that has the first argument filled in:
const doubler = multiplier.bind(null, 2);

// now we can use doubler like this:
console.log(doubler(5)); // prints 10
