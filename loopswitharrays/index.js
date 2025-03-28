let num=[3,5,1,2,4]
num.forEach((element)=>{
  console.log(element*element)
})
let name="Harry"
let arr=Array.from(name)
console.log(arr)
for(let i in num){
  console.log(num[i])
}
for(let item of num){
  console.log(item)
}