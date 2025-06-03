// for(let i=0;i<5;i++)
// {
//     // console.log("Hello");
//     console.log(i);
    
    
// }




// let i =0;
// while(i <= 5)
// {
//     console.log(i);
//     i++;
// }


// let i = 1;
// do{
//     console.log(i);
//     i++;
// }while(i <= 5)



// Prime number : 2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97

// let num = 21
// let flag = false;
// for(let i=2;i<num;i++)
// {
//     if(num % i == 0)
//     {
//         flag = true;
//     }
// }

// if(flag == true)
// {
//     console.log("Not prime number");
// }
// else{
//     console.log("Prime number");
// }



// reverse number 

let num = 1245;
let rev = 0;

while(num !=0)
{
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num/10)
}
console.log("Reverse number ....",rev);
