let a = 1;

var colors = ["red", "green", "blue", "yellow", "orange", "purple", "black", "orangered"];
const changeColor = ()=>{
    // console.log("welcome...");
    // console.log(a++);

    let RandomIndex = Math.floor(Math.random() * colors.length);
    console.log(RandomIndex);

    let mydiv = document.getElementById("mydiv");
    mydiv.style.backgroundColor = colors[RandomIndex];
    
    
}