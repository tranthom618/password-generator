// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Main function for the password generation process
function generatePassword() {
  //User window prompts to select criteria of their password
  var lengthPW = prompt("Please enter a number for how long your password will be (8 min to 128max):", 8);
  var lowercase = confirm("Include lowercase letters?\nClick Ok for YES\nClick Cancel for NO");
  var uppercase = confirm("Include UPPERCASE letters?\nClick Ok for YES\nClick Cancel for NO");
  var numPW = confirm("Include numbers?\nClick Ok for YES\nClick Cancel for NO");
  var specChar = confirm("Include special characters? (!@#$...)\nClick Ok for YES\nClick Cancel for NO");

  // vocab that will be the library of characters the user wants to be used
  var vocab = "";

  // Multiple 'if' only statements because each criteria needs to be independently checked unrelated to the others.
  // Using 1 'if' and multiple 'else if' will stop the code whenever the first condition is met.
  if (lowercase === true) {
    vocab.concat("abcdefghijklmnopqrstuvwxyz");
    alert("Lowercase letters added:\nabcdefghijklmnopqrstuvwxyz");
  }

  if (uppercase === true) {
    vocab.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    alert("Uppercase letters added:\nABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }

  if (numPW === true) {
    vocab.concat("1234567890");
    alert("Numbers added:\n1234567890");
  }

  if (specChar === true) {
    vocab.concat("!@#$%^&*()<>?,.");
    alert("Special characters added:\n!@#$%^&*()<>?,.");
  }

  // The alert for when none of the criteria is selected.
  if (lowercase === false && uppercase === false && numPW === false && specChar === false) {
    alert("You picked nothing for the password criteria!\nYou trying to make me use periods to make morse code or something?\n\nPress 'Generate Password' again and pick at least one of the criteria please.");
  }
  
  // The variables for the password being constructed and the random number generator to select a character to construct with
  var password;
  var randomGenerator;

  for (var i = 0; i <= lengthPW; i++) {
    
  }
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