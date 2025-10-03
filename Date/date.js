const getdate = ()=>{
    // let date = new Date();
    // // console.log(date);
    // console.log("fullyear --->",date.getFullYear());
    // console.log("month --->",date.getMonth());
    // console.log("date --->",date.getDate());
    // console.log("day --->",date.getDay());
    // console.log("hours --->",date.getHours());
    // console.log("minutes --->",date.getMinutes());
    // console.log("seconds --->",date.getSeconds());
    // console.log("milliseconds --->",date.getMilliseconds());
    // console.log("year --->",date.getYear());
    // console.log("timezoneoffset --->",date.getTime());
    


    let date2 = new Date()
    date2.setFullYear(2020)
    date2.setMonth(1)
    date2.setDate(1)
    date2.setHours(18)
    date2.setMinutes(45)
    date2.setSeconds(30)
    date2.setMilliseconds(0)
    console.log(date2)
    
}

getdate()