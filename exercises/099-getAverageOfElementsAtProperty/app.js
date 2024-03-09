function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  if(!Array.isArray(obj[key]) || obj[key].length== 0)return 0;
  let num = 0;
  let count = 0;
  obj[key].forEach(element => {
    num += element;
    count += 1;
  });
  return num/count;
}

let obj = {
  key: [1, 2, 3]
};
let output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2 