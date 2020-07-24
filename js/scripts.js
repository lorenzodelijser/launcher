let today = new Date()
let curHr = today.getHours()
let user = "Lorenzo"

if (curHr >= 6 && curHr < 12) {
  document.getElementById("welcome").innerHTML = `Goedemorgen ${user}!`
  document.getElementById("title").innerHTML = `👋 Goedemorgen ${user}!`
} else if (curHr >= 12 && curHr < 17 ) {
  document.getElementById("welcome").innerHTML = `Goedemiddag ${user}!`
  document.getElementById("title").innerHTML = `👋 Goedemiddag ${user}!`
} else {
  document.getElementById("welcome").innerHTML = `Goedenavond ${user}!`
  document.getElementById("title").innerHTML = `👋 Goedenavond ${user}!`
}