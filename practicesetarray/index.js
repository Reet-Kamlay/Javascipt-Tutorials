// let arr=[1,2,3,4,5,6]
// let a
// do{
//   a=prompt("Enter a number: ")
//   a=Number.parseInt(a)
//   arr.push(a)
//   console.log(arr)
// }while(a!=0)
// let arr=[1,2,3,4,10,40,50]
// let newarray=arr.filter((value)=>{
//   return value%10==0
// })
// console.log(newarray)
// let arr=[23,12,2,4,6]
// let newarray=arr.map((element)=>{
//   return element*element
// })
// console.log(newarray)
let arr=[1,2,3,4,5]
let n=arr.reduce((x1,x2)=>{
  return x1*x2
})
console.log(n)