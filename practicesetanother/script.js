// const loadScript=async(src)=>{
//   return new Promise((resolve,reject)=>{
//     script=document.createElement("script")
//     script.src=src
//     script.onload=()=>{
//       resolve(src+" Done success")
//     }
//     document.body.append(script)
//   })
// }
// let a=loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js")
// a.then((value)=>{
//   console.log(value)
// })
// const main2=async()=>{
//   console.log(new Date().getMilliseconds())
//   let a=await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js") 
//   console.log(a)
//   console.log(new Date().getMilliseconds())
// }
// main2()
// let p=()=>{
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       reject(new Error("Please this is not acceptable"))
//     },3000)
//   })
// }
// let a=async()=>{
//   try{
    
//   }
//   catch(err){
//     let c=await p()
//     console.log(c)
//   }
// }
// a()
let p1=async()=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(10)
    },2000)
  })
}
let p2=async()=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(20)
    },1000)
  })
}
let p3=async()=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(30)
    },3000)
  })
}
let run=async()=>{
  console.time("run")
  // let a1=await p1()
  // let a2=await p2()
  // let a3=await p3()
  // console.log(a1,a2,a3)
  let a1=p1()
  let a2=p2()
  let a3=p3()
  let a1a2a3=await Promise.all([a1,a2,a3])
  console.log(a1a2a3)
  console.timeEnd("run")
}
run()