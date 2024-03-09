// Write your function here
const getElementsLessThan100AtProperty = (obj, key) =>{
    if(!Array.isArray(obj[key]))return [];
    return obj[key].filter((num)=> num<100);
}


let obj = {
    key: [1000, 20, 50, 500]
  };
  let output = getElementsLessThan100AtProperty(obj, 'key');
  console.log(output); // --> [20, 50]