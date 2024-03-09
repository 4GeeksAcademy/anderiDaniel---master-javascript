// Write your function here
let getElementsThatEqual10AtProperty = (obj,key) => {
    if(!Array.isArray(obj[key]))return [];
    return obj[key].filter((item)=>item==10)
}

let obj = {
    key: [1000, 10, 50, 10]
  };
  let output = getElementsThatEqual10AtProperty(obj, 'key');
  console.log(output); // --> [10, 10]