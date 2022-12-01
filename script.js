// Assignment code here
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var specialCharacters = ['@','%','+','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
var characterTypeLowercase;
var characterTypeUppercase;
var characterTypeNumeric;
var characterTypeSpecial;
var passwordLength;
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
    var password01 = document.querySelector("#password");
    var password01 = "";
    var validCharacterSet = [];

    console.log("Character type lowercase =  " + characterTypeLowercase);
    console.log("Character type Uppercase =  " + characterTypeUppercase);
    console.log("Character type Numeric =  " + characterTypeNumeric);
    console.log("Character type Special =  " + characterTypeSpecial);

    // If user chose lowercase type
    if (characterTypeLowercase === "Y") {
        validCharacterSet = validCharacterSet.concat(lowerCasedCharacters); 
        console.log("Valid Character set =  " + validCharacterSet);
    }
    if (characterTypeUppercase === "Y") {
        validCharacterSet = validCharacterSet.concat(upperCasedCharacters); 
        console.log("Valid Character set =  " + validCharacterSet);

    }
    if (characterTypeNumeric === "Y") {
        validCharacterSet = validCharacterSet.concat(numericCharacters);
        console.log("Valid Character set =  " + validCharacterSet);

    }
    if (characterTypeSpecial === "Y") {
        validCharacterSet = validCharacterSet.concat(specialCharacters);
        console.log("Valid Character set =  " + validCharacterSet);

    } 
    if (characterTypeLowercase === "N" && characterTypeUppercase === "N" && characterTypeNumeric === "N" && characterTypeSpecial === "N") {
        window.alert("At least one type must be selected!");
        password01 = "No Password generated because no character Type was selected!";
        console.log("Valid Character set =  " + validCharacterSet);

        return;
    }

    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * validCharacterSet.length);
        // password01 += chars.substring(randomNumber, randomNumber +1);

        password01 += validCharacterSet[randomNumber];
    }

    // document.querySelector("#password").value = password01;
    // window.alert("The Password is:  " + password01);
    // writePassword();
    return password01;

}

function passCriteria() {
 // This loop check whether the password criteria length is valid or not
    // its then stored in var passwordLength
    passwordLength = window.prompt("Enter your password criteria:\nlength of the password (must be between 8-128 characters)");
    // If user pressed Cancel, immediately end function
    if (!passwordLength) {
        return;
    }
    while (passwordLength < 8 || passwordLength > 128) {
        passwordLength = window.prompt("Please re-enter the password length (must be between 8-128 characters)");
    }
    // This will validate the length of the password
    window.alert("You chose password length to be = " + passwordLength);

    // Now we wnat to check the character types of the password, we convert 
    // the var all to uppercase incase user puts in y or n, For every prompt
    // the character type chosen is validated   

    characterTypeLowercase = window.prompt("Enter your character type:\n1) Lowercase\nPlease select Y or N");
    characterTypeLowercase = characterTypeLowercase.toUpperCase();
    if (characterTypeLowercase === "Y") {
        window.alert("Lowercase type validated!");        
    } else {
        window.alert("Lowercase type not chosen!");
    }

    characterTypeUppercase = window.prompt("Enter your character type:\n2) Uppercase\nPlease select Y or N");
    characterTypeUppercase = characterTypeUppercase.toUpperCase();
    if (characterTypeUppercase === "Y") {
        window.alert("Uppercase type validated!");

    } else {
        window.alert("Uppercase type not chosen!");
    }


    characterTypeNumeric = window.prompt("Enter your character type:\n3) Numeric\nPlease select Y or N");
    characterTypeNumeric = characterTypeNumeric.toUpperCase();
    if (characterTypeNumeric === "Y") {
        window.alert("Numeric type validated!");
    } else {
        window.alert("Numeric type not chosen!");
    }


    characterTypeSpecial = window.prompt("Enter your character type:\n4) Special Characters\nPlease select Y or N");
    characterTypeSpecial = characterTypeSpecial.toUpperCase();
    if (characterTypeSpecial === "Y") {
        window.alert("Special characters validated!");
    } else {
        window.alert("Special type not chosen!");
    }


    // return characterTypeLowercase && characterTypeUppercase && characterTypeNumeric && characterTypeSpecial;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);