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
