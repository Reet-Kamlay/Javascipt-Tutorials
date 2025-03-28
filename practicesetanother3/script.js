class Complex{
  constructor(real,imaginary){
    this.real=real
    this.imaginary=imaginary
  }
  add(num){
    this.real=this.real+num.real
    this.imaginary=this.imaginary+num.imaginary
  }
  get real(){
    return this._real
  }
  get imaginary(){
    return this._imaginary
  }
  set imaginary(newImaginary){
    this._imaginary=newImaginary
  }
  set real(newReal){
    this._real=newReal
  }
}
let a=new Complex(2,4)
a.real=10
a.imaginary=10
let b=new Complex(6,2)
a.add(b)
console.log(`${a.real}+${a.imaginary}i`)