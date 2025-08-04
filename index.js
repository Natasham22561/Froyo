function getFroyoOrder() {
  const input = prompt(
    "Enter a list of froyo flavors, separated by commas.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );
    return input;
    
    function parseFlavors(input) {
  if (!input) return [];
  return input
    .split(",")
    .map(flavor => flavor.trim().toLowerCase())
    .filter(Boolean);
    }

    function countFlavors(flavors) {
  const counts = {};
  for (const flavor of flavors) {
    if (counts[flavor]) {
      counts[flavor] += 1;
    } else {
      counts[flavor] = 1;
    }
  }
  return counts;
    }

    function main() {
  const orderInput = getFroyoOrder();
  const flavors = parseFlavors(orderInput);
  const counts = countFlavors(flavors);

  console.log("Your Froyo Order Summary:");
  for (const [flavor, count] of Object.entries(counts)) {
    console.log(`${flavor}: ${count}`);
  }
}