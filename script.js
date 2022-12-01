// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
    // Call this function to get the password criteria
    passCriteria();
    // Password generator code
    // Used code from: 
    // This code showed an example of a password generator in javascript
    // URL:
    // https://dev.to/code_mystery/random-password-generator-using-javascript-6a#:~:text=querySelector(%22%23password%22)%3B,%2C%20()%20%3D%3E%20%7B%20passwordInput.
    var password01 = document.getElementById("password");
    var password01 = "";
    // If user chose lowercase type
    if (characterTypeLowercase === "Y") {
        for (var i = 0; i <= passwordLength; i++) {
            var randomNumber = Math.floor(Math.random() * characterTypes.lowerCase.length);
            password01 += chars.substring(randomNumber, randomNumber +1);

        }
    }
    // if user chose Uppercase type
    if (characterTypeUppercase === "Y") {
        for (var j = 0; j <= passwordLength; j++) {
            var randomNumber = Math.floor(Math.random() * characterTypes.upperCase.length);
            password01 += chars.substring(randomNumber, randomNumber +1);

        }
    }

    if (characterTypeNumeric === "Y") {
        for (var k = 0; k <= passwordLength; k++) {
            var randomNumber = Math.floor(Math.random() * characterTypes.numeric.length);
            password01 += chars.substring(randomNumber, randomNumber +1);

        }
    }

    if (characterTypeSpecial === "Y") {
        for (var l = 0; l <= passwordLength; l++) {
            var randomNumber = Math.floor(Math.random() * characterTypes.special.length);
            password01 += chars.substring(randomNumber, randomNumber +1);

        }
    }
    document.getElementById("password01").value = password01;
    window.alert(password01);
    // writePassword();
    // Ask user if they want to generate a new password
    var generateAgain = window.confirm("Generate new password?");

    if(generateAgain) {
        generatePassword();
    }
}

function passCriteria() {
 // This loop check whether the password criteria length is valid or not
    // its then stored in var passwordLength
    var passwordLength = window.prompt("Enter your password criteria:\nlength of the password (must be between 8-128 characters)");
    while (passwordLength < 8 || passwordLength > 128) {
        passwordLength = window.prompt("Please re-enter the password length (must be between 8-128 characters)");
    }
    // This will validate the length of the password
    window.alert("You chose password length to be = "+passwordLength);

    // Now we wnat to check the character types of the password, we convert 
    // the var all to uppercase incase user puts in y or n, For every prompt
    // the character type chosen is validated

    // The character types are stored in a struct
    var characterTypes = {
        lowerCase: "abcdefghijklmnopqrstuvwxyz",
        upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        numeric: "0123456789",
        special: [" ","!",`"`,"#","$","%","&","'","()","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","{","|","}","~","]"],

    }    

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
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);