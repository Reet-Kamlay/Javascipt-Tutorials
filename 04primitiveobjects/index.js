let a=null
let b=345
let c=true
let d=BigInt("567")+BigInt("3")
let e="Harry"
let f=Symbol("I am a nice symbol")
let g=undefined
console.log(a,b,c,d,e,f,g)
console.log(typeof d)
console.log(e+b)
console.log(typeof(e+b))
const a1={
  name:"reet",
  section:1,
  isPrincipal:false
}
a1["friend"]="Shubham"
a1["name"]="Lovish"
console.log(a1)
const dict={
  appreciate:"recognise the full worth of.",
  ataraxia:"a state of freedom from emotional disturbance and anxiety",
  yakka:"work,especially hard work."
}
console.log(dict.yakka)
console.log(dict["yakka"])