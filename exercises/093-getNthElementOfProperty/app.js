// Write your function here
function getNthElementOfProperty(objeto, key, num){
    if(!Array.isArray(objeto[key]))return undefined;
    return objeto[key][num];
}

let obj = {
    key: [1, 2, 6]
  };
  let output = getNthElementOfProperty(obj, 'key', 1);
  console.log(output); // --> 2