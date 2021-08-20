// Assignment code here
  var passwordArea = document.querySelector("#password");
  var generateBtn = document.querySelector("#generate");
function generatePassword(){
  var length = window.prompt("choose password length between 8 and 128");
  
  var criteria = [
    window.prompt("Would you like capitalization? Type 1 for Yes or 2 for No."),
    window.prompt("Would You like Special Characters? Type 1 for Yes or 2 for No."),
    window.prompt("Would You like to REMOVE Numbers? Type 1 for Yes or 2 for No.")
  ]

  if (length < 8 || length > 128) {
    window.alert("Length must be between 8 and 128.")
    return
  }
  
  
  var char = "abcdefghijklmnopqrstuvwkyz1234567890";
  var noNum ="abcdefghijklmnopqrstuvwkyz"
  var specialChar = "!@#$%&*();:"
  var capChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var passwordText = "";


  for(i=0;i < length; i++){
    if(criteria[2] == 1) {
      break;
    }

    passwordText += char.charAt(Math.floor(Math.random() * char.length))

  }

  if(criteria[2]== 1) {
    for(i=0;i < length; i++) {
      passwordText += noNum.charAt(Math.floor(Math.random() * noNum.length))
    }
    
  }

  if (passwordText.length == length) {
    if (criteria[0] == 1  ){
      passwordText = passwordText.toUpperCase()
    }
  }

  if(passwordText.length == length) {
    if (criteria[1] == 1)  {
      passwordText += specialChar.charAt(Math.floor(Math.random() * specialChar.length))
      passwordText = passwordText.slice(1)
    }
  }
  

  return passwordText
};



// Get references to the #generate element

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  passwordArea.textContent = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
