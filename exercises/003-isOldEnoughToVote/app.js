function isOldEnoughToVote(age) {
  // your code here
  let canVote = (age>=18) ? true : false;
  return canVote;
}
console.log(isOldEnoughToVote(18));