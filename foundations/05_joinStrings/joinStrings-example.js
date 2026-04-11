
const birthYear = 1947;
const thisYear = 1965;
const firstName = "Carlos";
const lastName = "Stevenson";
// adicionando novas variaves
const fullName = firstName + " " + lastName;
const age = thisYear - birthYear;

// const greeting = "Hello! My name is " + firstName + " " + lastName + " and I am " + (thisYear - birthYear) + " years old.";

// otimizando
const greeting = "Hello! My name is " + fullName + " and I am " + age + " years old.";


console.log(greeting);

module.exports = {
  greeting,
  birthYear,
  thisYear,
  firstName,
  lastName,
  // as duas novas variaveis
  fullName,
  age
}
