let today = new Date()
let curHr = today.getHours()
let user = 'Lorenzo'

if (curHr >= 6 && curHr < 12) {
  message = `Good morning ${user}!`
} else if (curHr >= 12 && curHr < 17) {
  message = `Good afternoon ${user}!`
} else {
  message = `Good evening ${user}!`
}

document.getElementById('welcome').innerHTML = message
document.getElementById('title').innerHTML = message