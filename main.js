// Getting the html Elements by Id and Classes
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let username = id ("username"),
    email = id ("email"),
    password = id ("password"),
    form = id ("form"),
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

// Getting the error massage if the form is submitted blank
    form.addEventListener("submit", (e)=> {
        e.preventDefault(); // prevent defult so the error text will not disappear right after you click the submit button
        
        engine(username, 0, "Username cannot be blank");
        engine(email, 1, "Email cannot be blank");
        engine(password, 2, "Password cannot be blank");
    });

// Getting the error and success Icons when the form is filled correctly and incorrectly.
    let engine = (id, serial, message) =>{
        if(id.value.trim() === ''){
            errorMsg[serial].innerHTML = message;
            failureIcon[serial].style.opacity = "1"; // Failure Icon has the opacity of 1 as it will appear if there is an error
            successIcon[serial].style.opacity = "0"; // Success Icon has the opacity of 0 as it will not appear because of an error
        }
        else{
            errorMsg[serial].innerHTML = "";
            failureIcon[serial].style.opacity = "0"; // Failure Icon has the opacity of 0 as it will not appear beacause the form was filled correctly
            successIcon[serial].style.opacity = "1"; // Success Iceon has the opacity of 1 as ti will appear when the form is filled out correctly
        }
    };

