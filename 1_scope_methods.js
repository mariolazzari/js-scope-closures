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

// Call the createVacation function with a location and length
