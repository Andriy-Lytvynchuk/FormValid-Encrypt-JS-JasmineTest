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

    if (usernameIn === "") {
        return "No username entered";
    }
    else if (passwordIn === "") {
        return "No password entered";
    }
    else if (md5Encrypt(usernameIn)!==usernameStored && md5Encrypt(passwordIn)!==passwordStored) {
        return "Invalid Username or Password";
    }
    else if (md5Encrypt(usernameIn) === usernameStored && md5Encrypt(passwordIn)=== passwordStored){
        return true;
    }
}//end new function
