// Write your function here
let getFirstElementOfProperty = (objeto, clave) => {
    if(!Array.isArray(objeto[clave]))return undefined;
    return objeto[clave][0];
}

let obj = {
    key: [1, 2, 4]
  };
let output = getFirstElementOfProperty(obj, 'key');
console.log(output); // --> 1