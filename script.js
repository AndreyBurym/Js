/* let Message = 'my' + 'Name' + 'is'
    console.log(Message) */
/* let result = '10 + 8'
    console.log(result) */
/* let nameIs = "Welcome to GoITeens"
    console.log(nameIs.length)

    let x = "Hello world!"
    console.log(x.toUpperCase()) */
/* const games = 'ICE'
    console.log(games.indexOf('I')) */
/* let yarik = 'Andrii'
    console.log(yarik.includes('andrii')) */
/* let yarik = '500 iq'
    console.log(yarik.startsWith('500 iq')) */
/* let andriiBurytm = 'geniu'
    console.log(andriiBurytm.padEnd(6,'geniu')) */
/* let c = "tex"
let u = "ukr"
let r = 2
let result = "TEXT" + c + "string" + r
console.log(result)
let newPokemon = 'myPokemon ${c}, lopyx ${o}'
console.log(newPokemon) */
/* 
let myName = 'Yarik'
console.log(myName.length) */
/* 
let myName = 'Andrii'
console.log(myName.toUpperCase()) */
/* let myName = "Sheva"
console.log(myName.indexOf("v")) */

/* let SAb = "Messi"
let twoName = sabaka.replace(SAb)
/* console.log(SAb.replace(SAb, @)) */
/* console.log(SAb.replace("M","@"))  */
/* let JS = 'Javascript'
console.log(JS.charCodeAt(5, 7)) */

/* let x = "Andrii";
let y = "Yarik(ochen_xarosh)";
let n = 129;
let g = 228;


let noName = 

console.log(noName); */

function verifyEmail(email) {
  var isValidEmail;
  if (email.includes("@")) {
    isValidEmail = true;
    console.log("Email містить символ @");
  } else {
    isValidEmail = false;
    console.log("Email не містить символ @");
  }

  var totalCharacters = email.length;
  console.log("Загальна кількість символів у email: " + totalCharacters);
  return {
    isValidEmail: totalCharacters,
  };
}
var email = "adburym@gmail.com";
console.log(verifyEmail(email));
