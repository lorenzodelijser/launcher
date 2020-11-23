let today = new Date()
let curHr = today.getHours()
let user = "Lorenzo"

if (curHr >= 6 && curHr < 12) {
  document.getElementById("welcome").innerHTML = `Good morning ${user}!`
  document.getElementById("title").innerHTML = `Good morning ${user}!`
} else if (curHr >= 12 && curHr < 17 ) {
  document.getElementById("welcome").innerHTML = `Good afternoon ${user}!`
  document.getElementById("title").innerHTML = `Good afternoon ${user}!`
} else {
  document.getElementById("welcome").innerHTML = `Good Evening ${user}!`
  document.getElementById("title").innerHTML = `Good Evening ${user}!`
}