let num=prompt("Enter a number: ")
num=Number.parseInt(num)
if(num%2==0 && num%3==0){
  console.log("Your number is divisible by 2 and 3")
}
else{
  console.log("Your number is not divisible by 2 and 3")
}