const app = "I don't do much.";

const myProfile = {
  id: 1382,
  firstName: 'Akuna',
  lastName: 'Matata',
  friends: [],
  getFriends() {
  fetch('http://api.example.com/1382/friends')
    .then(response => response.json())
    .then(friends => this.friends = friends);
  }
}

function multiplier(a, b) {
  return a * b;
}

const doubler = multiplier.bind(null, 2);
console.log(doubler(5)); // prints 10