const lasvegas = (fname,amount)=>{
    console.log(fname + " your tour confirm in lasvegas with package " + amount);
    
}

const newyork = (fname,amount)=>{
    console.log(fname + " your tour confirm in newyork with package " + amount);
}

const goa = (fname,amount)=>{
    console.log(fname + " your tour confirm in goa with package " + amount);
}

var budget = 1000;

if(budget > 3500){
    lasvegas("darsh",budget)
}
else if(budget > 2500){
    newyork("darsh",budget)
}
else if(budget > 1500){
    goa("darsh",budget)
}
else{
    console.log("budget is less than 1500 then you cant apply for tour..")
}