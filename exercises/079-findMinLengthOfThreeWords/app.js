// Write your function here
function findMinLengthOfThreeWords(word1,word2,word3){
    let finalWord = "";
    if (word1.length < word2.length && word1.length < word3.length){
        return word1.length;
    }else if(word2.length < word1.length && word2.length < word3.length){
        return word2.length;
    }else{
        return word3.length;
    }
}

let output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1