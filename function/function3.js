function science(per,fname){
    return fname + " your admision confirm in scinece stream with per "+ per
    
}

function commerce(per,fname){
    return fname + " your admision confirm in commerce stream with per "+ per
}

function arts(per,fname){
    return fname + " your admision confirm in arts stream with per "+ per
}


let percentage = parseInt(prompt("Enter percentage :"))
var temp;

if(percentage > 90){
    temp = science(percentage,"darsh")
}
else if(percentage > 70){
    temp = commerce(percentage,"darsh")
}
else if(percentage > 50){
    temp = arts(percentage,"darsh")
}
else{
    console.log("percentage is less than 50 then you cant apply for admission..")
}

console.log(temp);
