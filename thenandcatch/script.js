let p=new Promise((resolve,reject)=>{
  console.log("Promise is pending")
  setTimeout(()=>{
    console.log("I am promise and I am rejected")
    reject(new Error("I am an error"))
  },5000)
})