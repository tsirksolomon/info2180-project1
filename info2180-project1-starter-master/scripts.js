/* Add your JavaScript to this file*/
window.onload = function() {
    /*let button = document.querySelector("form button.btn");*/
    let mailForm = document.querySelector("section.newsletter form");

    let submitMessage = document.querySelector("section.newsletter .container .message");

    function checkEmail(){
        return true;
    }

    mailForm.addEventListener("submit", function(e) {
        e.preventDefault();
        if(mailForm["email"].value == "" || checkEmail() == false) {
            submitMessage.innerHTML = "Please enter a valid email address";
        } else {
            submitMessage.innerHTML = "Thank you! Your email address has been added to our mailing list!";
        }
    });
}