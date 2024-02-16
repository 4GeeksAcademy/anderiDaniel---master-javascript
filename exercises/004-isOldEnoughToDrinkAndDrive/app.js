function isOldEnoughToDrinkAndDrive(age) {
  // your code here
  let canDrinkAndDrive = (typeof age === "number") ? false : true;
  return canDrinkAndDrive;
}
console.log(isOldEnoughToDrinkAndDrive(21));