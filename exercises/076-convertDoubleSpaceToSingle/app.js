function convertDoubleSpaceToSingle(str) {
    // your code here
    // return str.split('  ').join(' ');

   let arr = str.split("  ");
   let newString = arr.join(" ");
   return newString
}

let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"
