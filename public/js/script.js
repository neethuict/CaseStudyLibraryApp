
var emailError = document.getElementById("emailError");
var email = document.getElementById("email");
function validate(){
    var regExp = /^([\w\.-]+)@([\w\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    if(regExp.test(email.value)){
        return true;
    } else{
        emailError.innerText="Invalid user name";
        emailError.style.color = "red";
        return false;
    }

}

function validateSignUp(){
    var emailError = document.getElementById("emailSignUpError");
    var email = document.getElementById("emailSignUp");
    var regExp = /^([\w\.-]+)@([\w\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    if(!regExp.test(email.value)){
        emailError.innerText="Invalid user name";
        emailError.style.color = "red";
        return false;
    } else{
            var phoneNum = document.getElementById("phoneNumber").value;
            var phoneError = document.getElementById("phoneError");
            var regExpPhone = /^([0-9]{3}[/. -]?)([0-9]{3}[/. -]?)([0-9]{4})$/;
            //var regExpPwd=/^$/;
            var passwd=document.getElementById("password").value;
            var pwdError = document.getElementById("pwdError");
            if(regExpPhone.test(phoneNum)){
                if(passwd.length <8){
                    pwdError.innerHTML="Minimum number of characters should be 8";
                    pwdError.style.color = "red";
                    return false;
                } else{
                    return true;
                } 
            } else{
                phoneError.innerHTML="Invalid phone number.Should contain 10 digits";
                phoneError.style.color="red";
                return false;
            }
        }
}

function checkPasswordStrenrgth(){
    var passwd=document.getElementById("password").value;
    var pwdError = document.getElementById("pwdError");
    var passwdStrength = document.getElementById("password-strength-status");
    var number = /([0-9])/;
    var lowerCase = /([a-z])/;
    var upperCase = /([A-Z])/;
    if (passwd.length < 8) {
        passwdStrength.classList.remove();
        passwdStrength.classList.add('weak-password');
        passwdStrength.innerHTML="Weak (should be atleast 8 characters.)";
    } else {
        if (number.test(passwd) && lowerCase.test(passwd) && upperCase.test(passwd)) {
            passwdStrength.classList.remove();
            passwdStrength.classList.add('strong-password');
            passwdStrength.innerHTML="Strong";
        } else {
            passwdStrength.classList.remove();
            passwdStrength.classList.add('medium-password');
            passwdStrength.innerHTML="Medium (should include numbers, lowercase and uppercase.)";
        }
    }

}