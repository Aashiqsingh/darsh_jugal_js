let box = document.getElementsByClassName("box")
console.log(box);


box[0].addEventListener("mouseenter",()=>{
    box[0].style.backgroundColor = "red"
})
box[1].addEventListener("mouseenter",()=>{
    box[1].style.backgroundColor = "green"
})
box[2].addEventListener("mouseenter",()=>{
    box[2].style.backgroundColor = "blue"
})
box[3].addEventListener("mouseenter",()=>{
    box[3].style.backgroundColor = "yellow"
})
box[4].addEventListener("mouseenter",()=>{
    box[4].style.backgroundColor = "pink"
})  
box[5].addEventListener("mouseenter",()=>{
    box[5].style.backgroundColor = "purple"
})
box[6].addEventListener("mouseenter",()=>{
    box[6].style.backgroundColor = "orange"
})
box[7].addEventListener("mouseenter",()=>{
    box[7].style.backgroundColor = "brown"
})
box[8].addEventListener("mouseenter",()=>{
    box[8].style.backgroundColor = "grey"
})
box[9].addEventListener("mouseenter",()=>{
    box[9].style.backgroundColor = "black"
})

for(let i=0;i<box.length;i++){
    box[i].addEventListener("mouseleave",()=>{
        box[i].style.backgroundColor = "white"
    })
}