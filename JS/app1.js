function changeIcon(){
    var passwordInput =document.getElementById("password");
    var iconSpan = document.getElementById("hiddenIcon");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        iconSpan.textContent = "👁️"; 
    } else {
        passwordInput.type = "password";
        iconSpan.textContent = "🔒";
        
    }

}
function validation(){
    var userName = document.getElementById("username").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var mobileNumber = document.getElementById("mobileNumber").value


    var userCheck = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;
    var emailCheck = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var passwordCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    var mobileNumberCheck = /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/;

    if(userCheck.test(userName)){
        document.getElementById("usernameError").innerHTML = "";
    }else{
        document.getElementById("usernameError").innerHTML = "*** Invalid userName";
        return false;
    }
    if(emailCheck.test(email)){
        document.getElementById("emailError").innerHTML = "";
    }else{
        document.getElementById("emailError").innerHTML = "*** Invalid email";
        return false;
    }
    if(passwordCheck.test(password)){
        document.getElementById("passwordError").innerHTML = "";
    }else{
        document.getElementById("passwordError").innerHTML = "**** Invalid password";
        return false;
    }
    if(mobileNumberCheck.test(mobileNumber)){
        document.getElementById("mobileError").innerHTML = "";
    }else{
        document.getElementById("mobileError").innerHTML = "*** Invalid mobile Number";
        return false;
    }

    var arr = []
    var objectData = {
        names : userName,
        email : email,
        password : password,
        number: mobileNumber, 
    }
    arr.push(objectData)
    var getData = JSON.stringify(arr)

    var getData2 =localStorage.setItem("userName", getData);

    var setData = JSON.parse(getData)
    console.log(setData);

    document.getElementById("username").value = "";

   document.getElementById("email").value = "" ;
   
    document.getElementById("password").value = "";
   
     document.getElementById("mobileNumber").value = "";
    return false;



}

