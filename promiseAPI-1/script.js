let p1=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("Value 1")
  },1000)
})
let p2=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    // resolve("value 2")
    reject(new Error("error"))
  },2000)
})
let p3=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("Value 3")
  },3000)
})
// let promise_all=Promise.all([p1,p2,p3])
let promise_all=Promise.allSettled([p1,p2,p3])
promise_all.then((value)=>{
  console.log(value)
})