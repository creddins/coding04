/****************************************************
Name: Curtis Ramsey Eddins
Assignment: 04
Purpose: Use PHP.
Notes: 
*********************************************************/


"use strict";

function validEmail(eemail) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(eemail);
}

function clearForm() {

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("remail").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";

    document.getElementById("msg").innerHTML = "<br>";
}

function validate() {
    var errorMessage = "";

    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var remailInput = document.getElementById("remail");
    var subjectInput = document.getElementById("subject");
    var messageInput = document.getElementById("message");

   
    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var remail = remailInput.value.trim();
    var subject = subjectInput.value.trim();
    var message = messageInput.value.trim();

    
    nameInput.value = name;
    emailInput.value = email;
    remailInput.value = remail;
    subjectInput.value = subject;
    messageInput.value = message;


    
    if (name === "") {
        errorMessage += "Name cannot be empty.<br>";
    }

    if (email === "") {
        errorMessage += "Email cannot be empty.<br>";
    }

    if (remail === "") {
        errorMessage += "Re-enter Email cannot be empty.<br>";
    }

    if (subject === "") {
        errorMessage += "Subject cannot be empty.<br>";
    }

    if (message === "") {
        errorMessage += "Message cannot be empty.<br>";
    }

    if (email != remail) {
        errorMessage += "Emails must match.<br>";
    }

    if (validEmail(email) == false) {
        errorMessage += "Email must be a valid email.<br>";
    }

    if (validEmail(remail) == false) {
        errorMessage += "Re-enter email must be a valid email.<br>";
    }

    return errorMessage;
}



var sendButton = document.getElementById("form-send");

sendButton.onclick = function () {

    var messageArea = document.getElementById("msg");

    var msg = validate();

    if (msg === "") {
        document.forms["names-form"].submit();
    } else {
        messageArea.innerHTML = msg;
    }

};

var clearButton = document.getElementById("form-clear");

clearButton.onclick = function () {
    clearForm();
}

