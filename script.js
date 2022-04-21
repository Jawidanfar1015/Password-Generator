// Assignment Cod
var passwordLength = 8;
var finalArray = [];

var upperCaseL = arrayFromLowToHigh(65, 90); 
var lowerCaseL = arrayFromLowToHigh(97, 122); 
var numericCh = arrayFromLowToHigh(48, 57);
var specialCh = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126)); 

  
function prompts(){
    finalArray = [];
    passwordLength = parseInt(prompt("Please choose a password length between (8-128) range."));

    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128){
        alert("Password length has to be a number, between (8-128) range!");
        prompts();
        return false;
    }
    var lower = confirm("Press (OK) if you want to add Lowercase Characters!");
    if (lower !== false){
        finalArray = finalArray.concat(lowerCaseL);}
    
    var upper = confirm("Press (OK) if you want to add Uppercase Characters!");
    if (upper !== false){
        finalArray = finalArray.concat(upperCaseL);
    }
    var number = confirm("Press (OK) if you want to add Numeric Characters!");
    if (number !== false){
        finalArray = finalArray.concat(numericCh);
    }
    var special = confirm("Press (OK) if you want to add Special Characters!");
    if (special !== false){
      finalArray = finalArray.concat(specialCh);
    }
    if ((lower !== true) && (upper !== true) && (number !== true) && (special !== true)){
        alert("You must select at least one character type to generae a password!.");
        prompts();
        return false;
    }
 
    return false;
}

function arrayFromLowToHigh(low, high){
    var finalArray = [];
    for (var i = low; i <= high; i++){
        finalArray.push(i);
        
    }
    return finalArray;
}

function generatePassword(upperCaseL, lowerCaseL, numericCh, specialCh, passwordLength){
var password = [];
for (var i = 0; i < passwordLength; i++){
    var randomAnsweer = finalArray[Math.floor(Math.random() * finalArray.length)];
    password.push(String.fromCharCode(randomAnsweer));
     
}
return password.join('');
}
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var finlaPrompts = prompts();
    if (finlaPrompts == false){
  var newPassword = generatePassword(upperCaseL, lowerCaseL, numericCh, specialCh, passwordLength);
  var passwordText = document.querySelector("#password");
    passwordText.value = newPassword;
    } 
    else {
        passwordText.value = [];
    }
   
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
