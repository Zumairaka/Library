// Validation for the SignUp Page

function validateForm(form)
{
    var fname = form.fname.value;
    var lname = form.lname.value;
    var uname = form.uname.value;
    var password = form.password.value;
    var password_reg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    var confirmpassword = form.confirmpassword.value;
    var email = form.email.value;
    var email_reg = /\S+@\S+\.\S+/;
    var phone = form.phone.value;
    var phone_reg = /(6|7|8|9)\d{9}$/;
    var dob = form.dob.value;
    var gender = form.gender.value;

    if(uname.length < 9)
    {
        alert("Username Should Have Atleast 8 Characters!");
        return false;
    }
    else if(password_reg.test(password) == false)
    {
        alert("Password Should Contain Atleast 8 Characters, 1 Number, 1 Lower Case Letter and 1 Upper Case Letter!"); 
        return false;
    }
    else if(password != confirmpassword)
    {
        alert("Password and Confirm Password Does Not Match!");
        return false;
    }
    else if(email_reg.test(email) == false)
    {
        alert("Please Enter a Valid Email!");
        return false;
    }
    else if(phone_reg.test(phone) == false)
    {
        alert("Please Enter a Valid Phone Number!");
        return false;
    }
}

//Validation for the Login Page

function validateLogin(loginform)
{
    var uname = loginform.uname.value;
    var password = loginform.password.value;
    var password_reg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    if(uname.length < 9)
    {
        alert("Username Should Have Atleast 8 Characters!");
        return false;
    }
    if(password_reg.test(password) == false)
    {
        alert("Password Should Contain Atleast 8 Characters, 1 Number, 1 Lower Case Letter and 1 Upper Case Letter!");
        return false;
    }
}