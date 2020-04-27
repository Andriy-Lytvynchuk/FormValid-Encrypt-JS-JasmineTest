window.onload = function() {

var formHandle =  document.forms.loginForm;
formHandle.onsubmit = processFrom;

var usernameField = document.getElementById("usernameField");
var passwordField = document.getElementById("passwordField");
var message = document.getElementById("output");
var usernameStored = "bb70530caa93e79bb48a261ead9d46ec"; //"Humber"
var passwordStored = "c4ca4238a0b923820dcc509a6f75849b"; //"1"

/* Function processFrom: ===========
calls checkLogin function, passes to it User's input as parameters, based in result returned by checkLogin function manipulates DOM.
*/
function processFrom(){
    var test = checkLogin(usernameField.value, passwordField.value);
    switch(test){
        case "No username and password entered":
                usernameField.classList.add("bgrndRed");
                passwordField.classList.add("bgrndRed");
                message.classList.add("textRed");
                message.innerHTML = "No Username and Password entered";
                return false; break;

        case "No username entered":
            usernameField.classList.add("bgrndRed");
            message.classList.add("textRed");
            message.innerHTML = "no Username entered";
            return false; break;
       
        case "No password entered":
            passwordField.classList.add("bgrndRed");
            message.classList.add("textRed");
            message.innerHTML = "no Password entered";
            return false; break;

        case "Invalid Username or Password":
            usernameField.classList.add("bgrndRed");
            passwordField.classList.add("bgrndRed");
            message.classList.add("textRed");
            message.innerHTML = "invalid Username or Password"; 
            return false; break;
    
        case true:
            message.classList.add("textGreen");
            message.innerHTML = "Welcome back to Humber!"; 
            return false; break;
        
         default:
            usernameField.classList.add("bgrndRed");
            passwordField.classList.add("bgrndRed");
            message.classList.add("textRed");
            message.innerHTML = "invalid Username or Password ";  
            return false;
}//End of Switch
}//End of Process form function

//Returns encrypted value

function md5Encrypt(stringIn) {
    "use strict";
    var md5string = new CryptoJS.MD5(stringIn);
    return md5string.toString();
}//END of function md5Encrypt

 /* NEW FUNCTION checkLogin, ====================
    accepts name and password entered by User, compares it against certain conditions
    and returns the result of comparison */

 function checkLogin(usernameIn, passwordIn) {
    if (usernameIn == "" &&  passwordIn == "" ) {
        return "No username and password entered";
    }
    if (usernameIn === "") {
        return "No username entered";
    }
     if (passwordIn === "") {
        return "No password entered";
    }
     if (md5Encrypt(usernameIn)!==usernameStored && md5Encrypt(passwordIn)!==passwordStored) {
        return "Invalid Username or Password";
    }
     if (md5Encrypt(usernameIn) === usernameStored && md5Encrypt(passwordIn)=== passwordStored){
        return true;
    }
}//end new function
 
}//enf of window.onload




/*   if-else version of function processFrom ===============
    var test = checkLogin(usernameField.value, passwordField.value);
 if (test === "No username entered" ) {
        usernameField.classList.add("bgrndRed");
        message.classList.add("textRed");
        message.innerHTML = "No username entered";
        return false;
    }
    else if (test === "No password entered") {
        passwordField.classList.add("bgrndRed");
        message.classList.add("textRed");
        message.innerHTML = "No password entered";
        return false;
    }
    else if (test === "Invalid Username or Password") {
        usernameField.classList.add("bgrndRed");
        passwordField.classList.add("bgrndRed");
        message.classList.add("textRed");
        message.innerHTML = "Invalid Username or Password"; 
        return false;
    }
    else if (test === true){
        message.classList.add("textGreen");
        message.innerHTML = "Welcome back!"; 
        return false;
    }
    */


    
/* ORIGINAL FUNCTION ============================ 
function checkLogin() {
    console.log ( md5Encrypt(usernameField.value));
    console.log ( md5Encrypt(passwordField.value));

    if (usernameField.value == "") {
        usernameField.classList.add("bgrndRed");
        message.classList.add("textRed");
        message.innerHTML = "No username entered";
        return false;
    }
    else if (passwordField.value == "") {
        passwordField.classList.add("bgrndRed");
        message.classList.add("textRed");
        message.innerHTML = "No password entered";
        return false;
    }
    else if (md5Encrypt(usernameField.value)!==usernameStored && md5Encrypt(passwordField.value)!==passwordStored) {
        usernameField.classList.add("bgrndRed");
        passwordField.classList.add("bgrndRed");
        message.classList.add("textRed");
        message.innerHTML = "Invalid Username or Password"; 
        return false;
    }
    else {
        message.classList.add("textGreen");
        message.innerHTML = "Welcome back!"; 
        return false;
    }
}//END of original function checkLogin
*/

