document.getElementsByTagName("ul")[0].firstElementChild.style.color = "green"
document.getElementsByTagName("ul")[0].lastElementChild.style.color = "green"
Array.from(document.getElementsByTagName("li")).forEach((element) => {
  element.style.background = "White";
})