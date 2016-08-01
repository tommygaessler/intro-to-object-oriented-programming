// this refernces itself

// we can declare functions as values in objects

// var pingPongBall = {
//   color: 'orange',
//   stars: 3,
//   busted: false,
//   about: function () {
//     console.log('I am an ' + this.color + ' ping pong ball, with ' + this.stars + ' stars');
//   }
// };
//
// // we can change values in the object
//
// pingPongBall.stars = 4;
//
// pingPongBall.about();

// this is a constructor, its like a factory

function PingPongBall (color, stars, dented) {
  this.color = color;
  this.stars = stars || 3;
  this.dented = dented || false;
  this.ping = function () {
    return 'I am a ' + this.color + ' ping pong ball';
  }
  this.dent = function () {
    this.dented = true;
  }
}

var pingPongBall1 = new PingPongBall('orange', 3);
var pingPongBall2 = new PingPongBall('blue', 1);
var pingPongBall2 = new PingPongBall('blue', null, true);

console.log(pingPongBall1);
console.log(pingPongBall2);

// Build a person
// 3 properties firstName, lastName, age
// All should be customizable
// Method called speak that prints internal properties
// Create three different people

function pet (petName, petSound) {
  this.petName = petName;
  this.petSound = petSound
}


pet.prototype.makeNoise = function () {
  return this.petSound;
}


var hoodlum = new pet('Hoodlum', 'bark bark');


console.log(hoodlum.makeNoise());


function human (firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.speak = function () {
    return 'My name is ' + this.firstName + ' ' + lastName + ' I am ' + this.age + ' years old!';
  };
  this.sayHiTo = function (friend) {
    if (friend.constructor.name === 'human') {
      return 'Hi, ' + friend.firstName;
    }
    else if (friend.constructor.name === 'pet') {
      return 'Awwww hi ' + pet.petName
    }
    else {
      return 'Uh... hi ' + friend;
    }
  };
}

var tommy = new human('Tommy', 'Gaessler', 19);
var hunter = new human('Hunter', 'Sanborn', 18);
var chris = new human('Chris', 'Ireland', 18);
var allison = new human('Allison', 'Brown', 17);

console.log(tommy.speak(), hunter.speak(), chris.speak());

console.log(tommy.sayHiTo(hoodlum));

// dynamically create objects
