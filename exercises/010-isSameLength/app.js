// Write your function here
let isSameLength = (word1,word2)=> {
    return (word1.length === word2.length)? true:false;
}
let output = isSameLength('words', 'super');
console.log(output); // --> true