function validation() {
    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    var direction = document.getElementById('direction').value;
    var postcode = document.getElementById('postcode').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (name == '' || surname == '' || direction == ''  || postcode == '' || password == '' || email == '') {
        alert("All fields Required");
        return false;
    }
    // name validation
    else if (name.length < 4) {
        alert("Name Must Be Atleast 4 characters");
        return false;
    }
    else if (surname.length < 4) {
        alert("Surname Must Be Atleast 4 characters");
        return false;
    }
    else if (direction.length < 4) {
        alert("Direction Must Be Atleast 4 characters");
        return false;
    }
    else if (postcode.length < 4) {
        alert("Postal Code Must Be Atleast 4 characters");
        return false;
    }
    // password validation
    else if (password.length < 8) {
        alert("Password Must Be Atleast 8 characters");
        return false;
    }
    else if (password.search(/[a-z]/i) < 0) {
        alert("Your password must contain at least one letter.");
        return false;
    }
    else if (password.search(/[0-9]/) < 0) {
        alert("Your password must contain at least one digit.");
        return false;
    }
    // email validation
    else if (email.length < 4) {
        alert("email Must Be Atleast 4 characters");
        return false;
    }
    else if (!validateEmail(email)) {
        alert(email + 'is not valid')
        return false
    }
    else {
        return alert('registration successful');
    }
}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}