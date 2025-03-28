let a={
  name2:"harry",
  language:"Javascript",
  run:()=>{
    alert("self run")
  }
}
console.log(a)
let p={
  run:()=>{
    alert("run")
  }
}
a.__proto__=p={
  name:"Jackie"
}
a.__proto__=p
a.run()
console.log(a.name)