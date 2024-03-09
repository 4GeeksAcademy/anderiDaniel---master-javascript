function getAllWords(str) {
    // your code here
    // let words = str.split(' ');
    // acá creamos la el método .split jajajaja
    let newArray=[];
    let newStr = ""
    for(i=0;i<=str.length;i++){
        if (str[i]== " "){
            newArray.push(newStr);
            newStr = "";
            continue;
        }else if(i == str.length-1){
            newStr+=str[i];
            newArray.push(newStr);
        }
        else{
            newStr+=str[i];
        }
    }
    return newArray;
}

let output = getAllWords('welcome to the jungle my people');
console.log(output); // --> ['Radagast', 'the', 'Brown']
