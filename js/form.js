// //VALIDATION

var nameErr = document.getElementById('name-error');
var emailErr = document.getElementById('email-error');
var msgErr = document.getElementById('msg-error');
var subErr = document.getElementById('sub-error')
var submitErr = document.getElementById('submit-error')
function validateName(){
    var name = document.getElementById('txtname').value;

    if(name.length == 0) {
        nameErr.innerHTML = 'Name is required';
        nameErr.style.color = 'red';
        return false;
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameErr.innerHTML = 'Enter full name';
        nameErr.style.color = 'red';
        return false;
    }
    nameErr.innerHTML = 'Name is valid';
    nameErr.style.color = 'green';
    return true
}

function validateEmail(){
    var email = document.getElementById('txtemail').value;

    if(email.length == 0) {
        emailErr.innerHTML = 'Email is required';
        emailErr.style.color = 'red';

        return false;
    }

    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailErr.innerHTML = 'Enter a valid email';
        emailErr.style.color = 'red';
        return false;
    }
    emailErr.innerHTML = "Email is valid"
    emailErr.style.color = 'green';
    return true
}

function validateSub(){
    var sub = document.getElementById('txtsub').value;
    
    if(sub.length < 10) {
        subErr.innerHTML = 'Please add more content in the message';
        subErr.style.color = 'red'
        return false;
    }
    subErr.innerHTML = 'Subject is valid'
    subErr.style.color = 'green'
    return true
}

function validateMsg(){
    var msg = document.getElementById('txtmessage').value;

     if(msg.length < 10) {
        msgErr.innerHTML = 'Please add more content in the message';
        msgErr.style.color = 'red'
        return false;
    }

    msgErr.innerHTML = "Message is Valid"
    msgErr.style.color = 'green'
    return true
}

function validateForm() {
    if(!validateName() || !validateEmail() || !validateMsg()|| !validateSub()) {
        emailErr.innerHTML = 'Enter a valid email';
        emailErr.style.color = 'red';
        subErr.innerHTML = 'Please add more content in the message';
        subErr.style.color = 'red'
        msgErr.innerHTML = 'Please add more content in the message';
        msgErr.style.color = 'red'
        submitErr.innerHTML = 'Enter the fields correctly!!'
        submitErr.style.color = 'red'
        return false;
    }
    return true;
}




