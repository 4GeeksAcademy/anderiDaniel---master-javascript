function checkAge(name, age) {
  // your code here
  let message = (age>=21)?`Welcome, ${name}!`:`Go home, ${name}!`;
  return message;
}
console.log(checkAge("Daniel",24));