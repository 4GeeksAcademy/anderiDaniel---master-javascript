// Write your function here
let areValidCredentials = (name,pass) => {
    if(name.length > 3 && pass.length >=8){ 
        return true;
    }else{
        return false;
    }
}


let output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output); // --> true