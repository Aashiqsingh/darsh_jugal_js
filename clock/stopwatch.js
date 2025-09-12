let hours = 0;
let minutes = 0;
let seconds = 0;

let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");


const start2 = ()=>{
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }
    hour.innerHTML = hours < 10 ? `0${hours}` : hours
    min.innerHTML = minutes < 10 ? `0${minutes}` : minutes
    sec.innerHTML = seconds < 10 ? `0${seconds}` : seconds
}

const start = ()=>{
    x = setInterval(()=>{
        start2()
    },1000)
}

const stop = ()=>{
    clearInterval(x)
}

const reset = ()=>{
    hours = 0;
    minutes = 0;
    seconds = 0;

    hour.innerHTML = hours < 10 ? `0${hours}` : hours
    min.innerHTML = minutes < 10 ? `0${minutes}` : minutes
    sec.innerHTML = seconds < 10 ? `0${seconds}` : seconds

    clearInterval(x)
}