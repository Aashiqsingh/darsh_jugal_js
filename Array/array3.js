var language = ["hindi", "english", "french", "german", "spanish","marathi","gujarati"];

// let deleteData = language.filter((lang)=>{
//     return lang != "french";
// })

// console.log(deleteData);




// const deleteLang = (langName)=>{

//     var x = language.filter((lang)=>{
//         return lang != langName
//     })

//     return x;
// }


// let x = deleteLang("marathi")
// console.log(x);



// -------------------------------------------------

// const deleteLang = (langName)=>{

//     return language.filter((lang)=>{
//         return lang != langName
//     })
// }


// let x = deleteLang("spanish")
// console.log(x);

// ----------------------------------------------------

// const deleteLang = (langName)=>{

//     return language.filter((lang)=> lang != langName)
// }


// let x = deleteLang("english")
// console.log(x);


// ----------------------------------------------------

const deleteLang = (langName)=> language.filter((lang)=> lang != langName)

let x = deleteLang("hindi")
console.log(x);
