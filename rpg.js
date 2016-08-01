
function Weapon (name, damage) {
  this.name = name;
  this.damage = damage;
}


function Warrior (name, gender, biggestSecret) {

  var biggestSecret = biggestSecret;

  this.name = name;
  this.health = 100;
  this.mana = 10;
  this.gender = gender;
  this.isAlive = true;

  this.sayBiggestSecret = function () {
    return biggestSecret;
  }
}

Warrior.prototype.introduce = function () {
  return 'This is ' + this.name + '!';
}

Warrior.prototype.setName = function (newName) {
  this.name = newName;
}

Warrior.prototype.attack = function (weapon) {
  return 'Ninja has a ' + weapon.name + ' that has ' + weapon.damage + ' damage';
}

var ninja = new Warrior('Ninja', 'male', 'no secrets');

var sword = new Weapon('sword',  10)

console.log(ninja, sword);

// write method called attack
// Say ninja has sword with damage of 10

// var ninja = new Warrior('Tommy', 'Male', 'Doesnt have favorite color');
// var gladiator = new Warrior('Sparta', 'Male');

// console.log(ninja.setName('Chris'));
// console.log(ninja.introduce());
