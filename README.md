# Javascript scope and closures

## Scope methods to a function

```js
function Vacation(destination, length) {
  this.destination = destination;
  this.length = length;
  this.travelers = [];
}

// Use the prototype to add a method to the
// Vacation function called addTraveler
Vacation.prototype.addTraveler = function (name) {
  // Push the name of a traveler into the travelers array
  this.travelers.push(name);
};

function createVacation(location, length) {
  // Create a new vacation object using the constructor
  const vacation = new Vacation(location, length);
  // Add a traveler named Alex
  vacation.addTraveler("Alex");
  // Return the first item in the travelers array
  return vacation.travelers[0];
}
```

## Handle scope in a vacation class

```js
// Base Class: Vacation
class Vacation {
  destination;
  length = 0;
  travelers = [];

  constructor(destination, length) {
    this.destination = destination;
    this.length = length;
  }

  addTraveler(name) {
    this.travelers.push(name);
  }
}

class Expedition extends Vacation {
  surviveRate = 0;
  items = [];

  constructor(destination, length) {
    super(destination, length);
    this.surviveRate = 0;
    this.items = [];
  }
}

function createExpedition(details) {
  // Create a new instance of an Expedition here
  const expedition = new Expedition(details.destination, details.length);
  // Add a traveler named Alex
  expedition.addTraveler("Alex");
  // Return the surviveRate property of the expedition object
  return expedition.surviveRate;
}
```

## Wrap variables in closures

```js
function congratulate(user) {
  const sentence = "Great job,";

  return function createSentence() {
    return `${sentence} ${user}!`;
  };
}
```

## Count pets in an array

```js
function countCats(pets) {
  return pets.reduce((acc, pet) => {
    if (pet.caetgory === "DOG") {
      return acc + 1;
    }
    return acc;
  });
}
```

## Reduce data with a function

```js
function outfitCost(outfitDetails) {
  return outfitDetails.reduce((total, item) => {
    if (item.inventory) {
      return outfitCost(item.inventory) + total;
    }
    return total + item.price;
  }, 0);
}
```