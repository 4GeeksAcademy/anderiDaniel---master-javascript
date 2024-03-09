// Write your function here
let getElementsGreaterThan10AtProperty = (obj, key) => {
    if(!Array.isArray(obj[key]))return [];
    return obj[key].filter((num)=>num>10);
}

let obj = {
    key: [1, 20, 30]
  };
  let output = getElementsGreaterThan10AtProperty(obj, 'key');
  console.log(output); // --> [20, 30]