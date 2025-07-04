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
    // console.log(x);

    return x;
    
}

var per = 52;
var ans;

if(per > 90){
    ans = admission("darsh",per,science)
}
else if(per > 70){
    ans = admission("darsh",per,commerce)
}
else if(per > 50){
    ans = admission("darsh",per,arts)
}
else{
    console.log("you are not admitted")
}
console.log(ans);
