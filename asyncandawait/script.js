async function reet(){
  let delhiweather=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("27 deg")
    },1000)
  })
  let bangaloreweather=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("21 deg")
    },7000)
  })
  console.log("Fetching Delhi weather Please wait....")
  let delhiW=await delhiweather
  console.log("Fetched Delhi weather "+delhiW)
  console.log("Fetching Bangalore weather Please wait....")
  let bangaloreW=await bangaloreweather
  console.log("Fetched Bangalore weather "+bangaloreW)
  return[delhiW,bangaloreW]
}
console.log("Welcome to weather control room.")
let a=reet()
console.log(a)
      