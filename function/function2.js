function science(per,fname){
    console.log(fname + " your admision confirm in scinece stream with per "+ per);
    
}

function commerce(per,fname){
    console.log(fname + " your admision confirm in commerce stream with per "+ per);
}

function arts(per,fname){
    console.log(fname + " your admision confirm in arts stream with per "+ per);
}


let percentage = parseInt(prompt("Enter percentage :"))

if(percentage > 90){
    science(percentage,"darsh")
}
else if(percentage > 70){
    commerce(percentage,"darsh")
}
else if(percentage > 50){
    arts(percentage,"darsh")
}
else{
    console.log("percentage is less than 50 then you cant apply for admission..")
}