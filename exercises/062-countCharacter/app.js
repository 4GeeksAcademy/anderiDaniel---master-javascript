function countCharacter(str, char) {
    // your code here
    let count =0;
    for (i of str){
        if(i.toLowerCase() ==char)count+=1;
    }
    return count;
}

let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
