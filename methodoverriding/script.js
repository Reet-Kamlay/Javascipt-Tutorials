class Employee{
  constructor(name){
    console.log(`${name}-Employee's contructor is here`)
    this.name=name
  }
  login(){
    console.log("Employee has logged in")
  }
  logout(){
    console.log("Employee has logged out")
  }
  requestLeaves(leaves){
    console.log(`Employee has requested ${leaves} leaves-auto Approved`)
  }
}
class Programmer extends Employee{
  requestCoffee(x){
    console.log(`Employee has requested ${x} coffee`)
  }
  requestLeaves(leaves){
    super.requestLeaves(4)
    console.log("One extra is granted.")
  }
}
let e=new Programmer()
e.login()
e.requestLeaves(3)