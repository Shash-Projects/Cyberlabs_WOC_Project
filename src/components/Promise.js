let p1 = new Promise((resolve, reject)=>{
    console.log("start")
    setTimeout(()=>{     
           console.log('hi there 3 sec')
           reject(21);
        }

    , 2000)
    
}).then(
    ()=>{console.log("processiing")} // promise initiate hote hi chal jaega
).catch((err)=>{
    console.log("doinggg")
    console.log(err)
}
    
)
 
p1.then((value)=>{
    console.log("finally")  // promise pura hone k baad chlega
    console.log(p1), (err)=>{ console.log("error") }
})
p1.catch((err)=>{
    console.log("caught")
})
// console.log(p1)
