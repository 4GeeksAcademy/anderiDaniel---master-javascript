function findShortestOfThreeWords(word1, word2, word3) {
    // your code here
    let shortWord = "";
    if(word1.length>shortWord.length) shortWord = word1;
    if(word2.length<shortWord.length) shortWord = word2;
    if(word3.length<shortWord.length) shortWord = word3;
    return shortWord;
}

let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'
