function getAllLetters(str) {
    // your code here
    let newArray = [];
    for (i of str){
        newArray.push(i);
    }
    return newArray;
}

let output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
