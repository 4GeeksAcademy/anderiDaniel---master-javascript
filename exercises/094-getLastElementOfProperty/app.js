// Write your function here
let getLastElementOfProperty = (objeto, clave) =>{
    if(!Array.isArray(objeto[clave]))return undefined;
    return objeto[clave][objeto[clave].length-1]
}

let obj = {
    key: [1, 2, 5]
  };
  let output = getLastElementOfProperty(obj, 'key');
  console.log(output); // --> 5