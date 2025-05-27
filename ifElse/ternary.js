var a = 23;
var b = 24;
var c = 25;

// if(a > b){
//     console.log("a is greater than b");
// }
// else{
//     console.log("b is greater than a");
// }

// let ans = a > b ? "A is gretter" : "B is gretter";
// console.log(ans);


// a > b ? console.log("A is greater") : console.log("B is greater");


// var ans = a < b ? b : a; 
// console.log(ans + " is greater");


// let ans = a>b && a>c ? "A is the greatest" : b>a && b>c ? "B is the greatest" : "C is the greatest";
// console.log(ans);


let ans = a > b ?( a > c ? a : c) : (b > c ? b : c);
console.log(ans);
