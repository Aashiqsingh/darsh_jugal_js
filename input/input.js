// alert("Hello world")  

// let x = confirm("Are you sure?");
// console.log(x);

// if(x == true )

// let name = prompt("Enter your name :")
// console.log(name);
// console.log(typeof name);

// console.log("18" + "20");
// let a = parseInt(prompt("Enter first number:"));


// var age = 18;

// switch(age){
//     case 18:
//         console.log("adult");
//         break;

//     case 19:
//         console.log("child");
//         break;

//     default:
//         console.log("Invalid age");
//         break;
// }


var a = parseInt(prompt("Enter first number:"));
var b = parseInt(prompt("Enter second number:"));

var choice = parseInt(prompt("1 for Add \n2 for sub \n3 for mul \n4 for div \n\nEnter your choice"))


switch(choice){
    case 1:
        console.log("Addition is: " + (a + b));
        break;

    case 2:
        console.log("Subtraction is: " + (a - b));
        break;

    case 3:
        console.log("Multiplication is: " + (a * b));
        break;

    case 4:
        console.log("Division is: " + (a / b));
        break;

    default:
        console.log("Invalid choice");
        break;
        
}