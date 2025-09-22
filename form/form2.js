function submit(){
    let name = document.getElementById("name")
    let gender = document.getElementsByName("gender")
    // console.log(gender);
    let age = document.getElementById("age")

    let gen = '';
    if(gender[0].checked == true){
        gen = "male";
    }
    else if(gender[1].checked == true){
        gen = "female";
    }
    else if(gender[2].checked == true){
        gen = "other";
    }

    let output = document.getElementById("output")


    if(gen == "male"){
        if(age.value > 18){
            output.innerHTML = "You are eligible for the scholarship..."
        }
        else{
            output.innerHTML = "Sorry you are not eligible for the scholarship..."
        }
    }
    else if(gen == "female"){
        if(age.value > 21){
            output.innerHTML = "You are eligible for the scholarship..."
        }
        else{
            output.innerHTML = "Sorry you are not eligible for the scholarship..."
        }
    }
    else {
        if(age.value > 25){
            output.innerHTML = "You are eligible for the scholarship..."
        }
        else{
            output.innerHTML = "Sorry you are not eligible for the scholarship..."
        }
    }
    
}