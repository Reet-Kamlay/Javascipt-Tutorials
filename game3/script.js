let user = prompt("Enter W S and G: ")
let cpuI = Math.floor(Math.random() * 3)
let cpu = ["S", "W", "G"][cpuI]
const match = (cpu, user) => {
  if (user == cpu) {
    return "Tied"
  }
  else if (user == "W" && cpu == "G") {
    return "cpu"
  }
  else if (user == "G" && cpu == "W") {
    return "user"
  }
  else if (user == "S" && cpu == "W") {
    return "user"
  }
  else if (user == "W" && cpu == "S") {
    return "cpu"
  }
  else if (user == "G" && cpu == "S") {
    return "user"
  }
  else if (user == "S" && cpu == "G") {
    return "cpu"
  }
}
let result = match(cpu, user)
alert(" CPU: " + cpu + " USER: " + user + " The winner is: " + result)