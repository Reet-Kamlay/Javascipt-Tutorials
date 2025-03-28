function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
let a=getRandomArbitrary(1,100)
a=Number.parseInt(a)
console.log(a)
let num=prompt("Enter a number: ")
num=Number.parseInt(num)
while(num!=a){
  if(num>a){
    console.log("The correct number is lesser than your entered number.")
    num=prompt("Enter a number: ")
  }
  else{
    console.log("The correct number is greater than your entered number.")
    num=prompt("Enter a number: ")
  }
}  
console.log("You have guessed the correct number.")