// Write your function here
let removeElement = (array, discarder)=>{
    return array.filter(function(number){
        return number!==discarder;
    })
}
let output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]