// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// This loop check whether the password criteria length is valid or not
// its then stored in var passwordLength
var passwordLength = window.prompt("Enter your password criteria:\nlength of the password (must be between 8-128 characters)");
while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = window.prompt("Please re-enter the password length (must be between 8-128 characters)");
}

// Now we wnat to check the character types of the password, we convert 
// the var all to uppercase incase user puts in y or n, For every prompt
// the character type chosen is validated
var characterTypeLowercase = window.prompt("Enter your character type:\n1) Lowercase\nPlease select Y or N");
characterTypeLowercase = characterTypeLowercase.toUpperCase();
if (characterTypeLowercase === "Y") {
    window.alert("Lowercase type validated!");
}

var characterTypeUppercase = window.prompt("Enter your character type:\n2) Uppercase\nPlease select Y or N");
characterTypeUppercase = characterTypeUppercase.toUpperCase();
if (characterTypeUppercase === "Y") {
    window.alert("Uppercase type validated!");

}

var characterTypeNumeric = window.prompt("Enter your character type:\n3) Numeric\nPlease select Y or N");
characterTypeNumeric = characterTypeNumeric.toUpperCase();
if (characterTypeNumeric === "Y") {
    window.alert("Numeric type validated!");
}

var characterTypeSpecial = window.prompt("Enter your character type:\n4) Special Characters\nPlease select Y or N");
characterTypeSpecial = characterTypeSpecial.toUpperCase();
if (characterTypeSpecial === "Y") {
    window.alert("Special characters validated!");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);