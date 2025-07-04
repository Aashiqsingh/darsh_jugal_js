function science(option){
    return option.fname + " your admision confirm in science stream with per "+ option.per
}

function commerce(option){
    return option.fname + " your admision confirm in commerce stream with per "+ option.per
}

function arts(option){
    return option.fname + " your admision confirm in arts stream with per "+ option.per
}


// cb --> callback function
function admission(fname,per,cb){
    let x = cb({fname:fname,per:per})
    console.log(x);
    
}

var per = 72;
if(per > 90){
    admission("darsh",per,science)
}
else if(per > 70){
    admission("darsh",per,commerce)
}
else if(per > 50){
    admission("darsh",per,arts)
}
else{
    console.log("you are not admitted")
}