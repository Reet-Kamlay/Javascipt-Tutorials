const createTodo=async(todo)=>{
  let options={
    method: "POST",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify(todo)
  }
  let p=await fetch('https://jsonplaceholder.typicode.com/posts',options)
  let response=await p.json()
  return response
}
const mainFunc=async()=>{
  let todo={
    title:"Reet",
    body:"Kamlay",
    userId:1100
  }
let todor=await createTodo(todo)
console.log(todor)
}
mainFunc()