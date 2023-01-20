// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var lengthPW = prompt("Please enter a number for how long your password will be (8 min to 128max):", 8);
  var lowercase = confirm("Include lowercase letters?\nClick Ok for YES\nClick Cancel for NO");
  var uppercase = confirm("Include UPPERCASE letters?\nClick Ok for YES\nClick Cancel for NO");
  var numPW = confirm("Include numbers?\nClick Ok for YES\nClick Cancel for NO");
  var lowercase = confirm("Include special characters? (!@#$...)\nClick Ok for YES\nClick Cancel for NO");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

/////////////////////////

// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters