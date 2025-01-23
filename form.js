
function formvalidate(){
    var firstName = document.getElementById("First Name").value;
    var lastName = document.getElementById("Last Name").value;
    var phone = document.getElementById("Phone").value;
    var email = document.getElementById("Email").value;
    let validate = true;
    
    // Name Validation
    if (firsName === ""){
        document.gerElementById("nameError").innerHTML = "Fill the first name";
        validate = false;
    }
    if (lastName === ""){
        document.getElementById("lnameError").innerHTML = "Fill last name";
        validate = false;
    }
    // Phone Validation
    if (phone === ""){
        document.getElementById("phoneError").innerHTML = "Fill phone number";
        validate = false;
    }
    
}