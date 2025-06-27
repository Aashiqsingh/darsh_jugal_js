var product = {
    id:101,
    name:"IPHONE",
    price:4000,
    discount:20,
    isAvailable:true,
    color:["white", "black", "red"],
    details:{
        cpu:"A9",
        ram:512,
        screen:"6.5",
        brand:"Apple",
        warranty:2,
        camera:"5mp"
    }
}

console.log(product);
console.log(product.name);
console.log(product.price);
console.log(product.discount);
console.log(product.isAvailable);
console.log(product.color);
// console.log(product.color[0]);

for(let i=0;i<product.color.length;i++){
    console.log(product.color[i]);
}


console.log(product.details);
console.log(product.details.brand);
console.log(product.details.cpu);
console.log(product.details.ram);
console.log(product.details.screen);
console.log(product.details.warranty);




