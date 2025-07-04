function demo(){
    console.log("demo function called");
    
}

function test(x){
    // console.log(x);
    x()
    
}

// test(12)
// test("hello")
// test(12.45)
// test(true)

test(demo)