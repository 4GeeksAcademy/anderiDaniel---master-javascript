// Write your function here
let computeAverageLengthOfWords = (word1,word2) =>{
    let prom = (word1.length + word2.length)/2;
    return prom;
}

let output = computeAverageLengthOfWords('code', 'programs');
console.log(output); // --> 6