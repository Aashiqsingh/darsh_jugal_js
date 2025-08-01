function changeTxt(){
    let txt = document.getElementById("txt");

    txt.innerHTML = "Royal technosoft pvt ltd.";
    txt.style.backgroundColor = "red";
    txt.style.color = "white";
}

function changeRef(){
    let link = document.getElementById("link");
    link.href = "https://netflix.com";
    link.innerHTML = "Netflix";
    link.target = "_blank"
}