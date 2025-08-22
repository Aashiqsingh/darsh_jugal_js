const register = (event)=>{
    event.preventDefault();


    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    let age = document.getElementById("age")
    let mobile = document.getElementById("mobile")


    let user = {
        name: name.value,
        email: email.value,
        password: password.value,
        age: age.value,
        mobile: mobile.value
    }

    console.log(user);
    alert("Registered Successfully");
    localStorage.setItem("email",email.value)
    localStorage.setItem("password",password.value)
    

    location.href = "login.html"

}

const login = ()=>{

    let email = document.getElementById("email")
    let password = document.getElementById("password")

    let signupEmail = localStorage.getItem("email")
    let signupPassword = localStorage.getItem("password")

    if(email.value === signupEmail && password.value === signupPassword){
        alert("Login Successfully")
    }
    else{
        alert("Invalid Email or Password")
    }
}