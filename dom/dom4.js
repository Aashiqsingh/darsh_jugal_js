var images = ["img1.png","img2.webp","img3.jpg","img4.png","img5.jpg"];

const changeImage = ()=>{

    let randomIndex = Math.floor(Math.random() * images.length);

    let img = document.getElementById("img");

    img.src = "../Image/" + images[randomIndex]
}