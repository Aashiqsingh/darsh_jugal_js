const lasvegas = (fname,amount)=>{
    return fname + " your tour confirm in lasvegas with package " + amount
    
}

const newyork = (fname,amount)=>{
    return fname + " your tour confirm in newyork with package " + amount
}

const goa = (fname,amount)=>{
    return fname + " your tour confirm in goa with package " + amount
}

var budget = 4000;
var temp;

if(budget > 3500){
    temp = lasvegas("darsh",budget)
}
else if(budget > 2500){
    temp = newyork("darsh",budget)
}
else if(budget > 1500){
    temp = goa("darsh",budget)
}
else{
    console.log("budget is less than 1500 then you cant apply for tour..")
}

console.log(temp);
