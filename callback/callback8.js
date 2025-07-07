const wordHandler = (option)=>{

    return option.fname + " file Handle with wordHandler"
    
}

const pdfHandler = (option)=>{
    return option.fname + " file Handle with pdfHandler"
    
}

const pngHandler = (option)=>{
    return option.fname + " file Handle with pngHandler"
    
}

const jpgHandler = (option)=>{
    return option.fname + " file Handle with jpgHandler" 
    
}


const Handler = (fname,cb)=>{
    let ans = cb({fname:fname,size:"1000kb"})
    // console.log(ans);


    return ans;
    
}




var fileName = "abc.png";
let ans;

if(fileName.endsWith(".word")){
    ans = Handler(fileName,wordHandler)
}
else if(fileName.endsWith(".pdf")){
    ans = Handler(fileName,pdfHandler)
}
else if(fileName.endsWith(".png")){
    ans = Handler(fileName,pngHandler)
}
else if(fileName.endsWith(".jpg")){
    ans = Handler(fileName,jpgHandler)
}
else{
    console.log("File type not supported")
}
console.log(ans);
