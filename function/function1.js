// there are for types of function
// 1. without returntype without argument 
// 2. without returntype with argument
// 3. with returntype without argument
// 4. with returntype with argument


// function : function keyword 
// return : return keyword

// without returntype without argument
function demo(){
    console.log("demo function called...");
    
}

// demo()


// without returntype with argument

function add(a,b){
    console.log("Addition = ",a+b);
    
}

// add(4,5)

// with returntype without argument

function test(){
    return "with returntype without argument"
}

// let x = test()
// console.log(x);


// with returntype with argument

function mul(x,y,z){
    return x*y*z;
}

let x = mul(2,3,4)
console.log("multiply = ",x);

