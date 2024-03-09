// Write your function here
let computeAverageOfNumbers = (array)=> {
    let arraySum = 0;
    let arrayCount = 0;
    for (i of array){
        arraySum += i;
        arrayCount += 1;
    }
    if (arraySum == 0){
        return 0
    }else{
    return arraySum/arrayCount;
    }
}
let input = [1, 2, 3, 4, 5];
let output = computeAverageOfNumbers(input);
console.log(output); // --> 3