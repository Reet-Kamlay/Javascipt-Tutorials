let user = prompt("Enter S W or G: ")
let cpuI = Math.floor(Math.random() * 3)
let cpu = ["S", "W", "G"][cpuI]
const match = (user, cpu) => {
  if (cpu == user) {
    return "Nobody. Match is tied"
  }
  else if (cpu == "S" && user == "W") {
    return "cpu"
  }
  else if (cpu == "W" && user == "S") {
    return "user"
  }
  else if (cpu == "W" && user == "G") {
    return "user"
  }
  else if (cpu == "G" && user == "W") {
    return "cpu"
  }
  else if (cpu == "G" && user == "S") {
    return "cpu"
  }
  else if (cpu == "S" && user == "G") {
    return "user"
  }
}
let result = match(user, cpu)
document.write(`CPU: ${cpu} and USER: ${user}\nThe winner is ${result}`)