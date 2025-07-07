const wordHandler = (option)=>{

    console.log(option.fname + " file Handle with wordHandler");
    
}

const pdfHandler = (option)=>{
    console.log(option.fname + " file Handle with pdfHandler");
    
}

const pngHandler = (option)=>{
    console.log(option.fname + " file Handle with pngHandler");
    
}

const jpgHandler = (option)=>{
    console.log(option.fname + " file Handle with jpgHandler" );
    
}


const Handler = (fname,cb)=>{
    cb({fname:fname,size:"1000kb"})
}




var fileName = "abc.pdf";

if(fileName.endsWith(".word")){
    Handler(fileName,wordHandler)
}
else if(fileName.endsWith(".pdf")){
    Handler(fileName,pdfHandler)
}
else if(fileName.endsWith(".png")){
    Handler(fileName,pngHandler)
}
else if(fileName.endsWith(".jpg")){
    Handler(fileName,jpgHandler)
}
else{
    console.log("File type not supported")
}