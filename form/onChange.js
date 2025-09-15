const changeColor = ()=>{
   
    let color = document.getElementById("color")
    console.log("color --->",color.value)

    let box = document.getElementById("box")

    box.style.height = "300px";
    box.style.width = "300px";
    box.style.backgroundColor = color.value;
    box.style.margin = "100px 400px"
    
}

const changeradius = ()=>{
    let radius = document.getElementById("radius")

    let box = document.getElementById("box")
    box.style.borderRadius = radius.value;
}