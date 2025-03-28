let arr=[34,5,56]
a=arr.map((value,index,array)=>{
  console.log(value,index,array)
  return (value*value)+index
})
console.log(a)
let arr2=[12,34,56,2,3,5,7]
let a1=arr2.filter((a)=>{
  return a<10
})
console.log(a1)
let arr3=[1,2,3,4,5]
let newarr3=arr3.reduce((h1,h2)=>{
  return h1+h2
})
console.log(newarr3)