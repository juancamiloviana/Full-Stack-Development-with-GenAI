let obj = new Promise((resolved, rejected) =>{
    resolved("Promise resolve succesfully")
    rejected("Promise rejected with error")
})

obj.then(data=>console.log("Then called"+data)).catch(error=>console.log("Catch called"))
console.log("normal statement 1")
console.log("normal statement 2")
console.log("normal statement 3")