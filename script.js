// Lesson 1
// Add properties "name" and "numLegs" to the object "dog"
let dog = {
    name: "Grand Duke Bow-wow",
    numLegs: 4

};

// Lesson 2
// Access properties of object "dog" using dot notation
let dog = {
  name: "Spot",
  numLegs: 4
};
// Only change code below this line
console.log(dog.name, dog.numLegs);

// Lesson 3
// Create a method inside the "dog" object called "sayLegs"
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return `This dog has ${dog.numLegs} legs.`}
};

dog.sayLegs();

// Lesson 4
// change "dog" in the "sayLegs" method to "this"
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

dog.sayLegs();

// Lesson 5
// create a "constructor" function named "Dog"
function Dog() {
    this.name = "Spot";
    this.color = "black";
    this.numLegs = 3;
}

// Lesson 6
// Use the Dog constructor from the last lesson to create a new instance of Dog, assigning it to a variable hound.
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Only change code below this line
let hound = new Dog();

// Lesson 7
// Create another Dog constructor that receives arguments
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}

let terrier = new Dog("Mighty Bill", "Brown");

// Lesson 8
// Create a new instance of the House constructor Then, use instanceof to verify that it is an instance of House.
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line

let myHouse = new House(5);

myHouse instanceof House;

// Lesson 9
// Add the own properties of canary to the array ownProps.
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line
for (let prop in canary) {
  if(canary.hasOwnProperty(prop)) {
    ownProps.push(prop);
  }
}

// Lesson 10
// Add a numLegs property to the prototype of Dog
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

// Only change code above this line
let beagle = new Dog("Snoopy");

// Lesson 11
// Add all of the own properties of beagle to the array ownProps. Add all of the prototype properties of Dog to the array prototypeProps.
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line

for (let prop in beagle) {
  if (beagle.hasOwnProperty(prop)) {
    ownProps.push(prop);
  } else {
    prototypeProps.push(prop);
  }
}

// Lesson 12
// Write a joinDogFraternity function that takes a candidate parameter and, using the constructor property, return true if the candidate is a Dog, otherwise return false.
function Dog(name) {
  this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true;
  }
    return false;
}

// Lesson 13
// Add the property numLegs and the two methods eat() and describe() to the prototype of Dog by setting the prototype to a new object.
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log(`My name is ${this.name}.`);
  }
};

// Lesson 14
// Define the constructor property on the Dog prototype.
function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

// Lesson 15
// Modify the code to show the correct prototype chain.
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // yields true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);

// Lesson 16
// The eat method is repeated in both Cat and Bear. Edit the code in the spirit of DRY by moving the eat method to the Animal supertype.
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Lesson 17
// Use Object.create to make two instances of Animal named duck and beagle.
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line

// Lesson 18
// Modify the code so that instances of Dog inherit from Animal.
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Only change code below this line

Dog.prototype = Object.create(Animal.prototype);
let beagle = new Dog();

// Lesson 19
// Fix the code so duck.constructor and beagle.constructor return their respective constructors.
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();

// Lesson 20
// Add all necessary code so the Dog object inherits from Animal and the Dog's prototype constructor is set to Dog. Then add a bark() method to the Dog object.
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
    console.log("Woof!");
}


// Only change code above this line

let beagle = new Dog();

// Lesson 21
// Override the fly() method for Penguin so that it returns "Alas, this is a flightless bird."
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line

Penguin.prototype.fly = function() {
    return "Alas, this is a flightless bird.";
}

// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());

// Lesson 22
// Create a mixin named glideMixin that defines a method named glide. Then use the glideMixin to give both bird and boat the ability to glide.
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Only change code below this line

let glideMixin = function(obj) {
  obj.glide = function() {
    console.log("Weeeee, glide!");
  }
}

glideMixin(bird);
glideMixin(boat);

// Lesson 23
// Change how weight is declared in the Bird function so it is a private variable. Then, create a method getWeight that returns the value of weight 15.
function Bird() {
  let weight = 15;

  this.getWeight = function() {
    return weight;
  };
}

// Lesson 24
// Rewrite the function makeNest and remove its call so instead it's an anonymous immediately invoked function expression (IIFE).
(function () {
  console.log("A cozy nest is ready");
})();

// Lesson 25
// Create a module named funModule to wrap the two mixins isCuteMixin and singMixin. funModule should return an object.
let funModule = (function () {
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
      };
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      }
    }
  }
})();
