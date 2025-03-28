let a = document.getElementsByTagName("div")[0]
// a.innerHTML = a.innerHTML + "<h1>Hello World!</h1>";
let div = document.createElement("div")
div.innerHTML = "<h1>Hello World!</h2>"
// a.append(div)
// a.prepend(div)
// a.prepend(div)
// a.after(div)
// a.before(div)
a.replaceWith(div)