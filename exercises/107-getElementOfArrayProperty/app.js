function getElementOfArrayProperty(obj, key, index) {
    // your code here
    if(!Array.isArray(obj[key]) || obj[key].lenght < -1) return undefined
    return [...obj[key]][index];
}

let obj = {
    key: ['Jamil', 'Albrey']
};
let output = getElementOfArrayProperty(obj, 'key', 0); 
console.log(output); // --> 'Jamil'
