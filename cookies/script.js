console.log(document.cookie)
document.cookie="name=harry1122334400"
document.cookie="name2=harry112233344002"
document.cookie="name=harry"
let key=prompt("enter your key")
let value=prompt("enter your value")
document.cookie=`${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie)