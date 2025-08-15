function submitHandler(event){
    event.preventDefault();

    let name = document.getElementById("name")
    console.log("name --> ",name.value);
    
    let age = document.getElementById("age")
    console.log("age --->",age.value);

    let nameErr = document.getElementById("nameErr")
    let ageErr = document.getElementById("ageErr")

    if(name.value == ""){
        // alert("Please fill all the fields")
        nameErr.innerHTML = "Name is required...";
        nameErr.style.color = "red";
    }
    else if(name.value.length < 3){
        nameErr.innerHTML = "Name should be atleast 3 characters...";
        nameErr.style.color = "red";
    }
    else{
        nameErr.innerHTML = name.value;
        nameErr.style.color = "green";
    }

    if(age.value == ""){
        ageErr.innerHTML = "Age is required...";
        ageErr.style.color = "red";
    }
    else{
        ageErr.innerHTML = age.value;
        ageErr.style.color = "green";
    }

    // alert("Form submitted...")
}