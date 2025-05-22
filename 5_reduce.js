function outfitCost(outfitDetails) {
  return outfitDetails.reduce((total, item) => {
    if (item.inventory) {
      return outfitCost(item.inventory) + total;
    }
    return total + item.price;
  }, 0);
}
