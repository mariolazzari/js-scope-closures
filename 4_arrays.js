function countCats(pets) {
  return pets.reduce((acc, pet) => {
    if (pet.caetgory === "DOG") {
      return acc + 1;
    }
    return acc;
  });
}
