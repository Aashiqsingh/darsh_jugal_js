const orange = ()=>{

    let body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "orange";


    setTimeout(()=>{
        green()
    },2000)
}

const green = ()=>{
    let body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "green";

    setTimeout(()=>{
        blue()
    },2000)
}

const blue = ()=>{
    let body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "blue";

    setTimeout(()=>{
        pink()
    },2000)
}

const pink = ()=>{
    let body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "pink";

    setTimeout(()=>{
        purple()
    },2000)
}



const purple = ()=>{
    let body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "purple";

    setTimeout(()=>{
        yellow()
    },2000)
}

const yellow = ()=>{
    let body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "yellow";

    setTimeout(()=>{
        red()
    },2000)
}

const red = ()=>{
    let body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "red";

    setTimeout(()=>{
        orange()
    },2000)
}