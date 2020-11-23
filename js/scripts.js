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

// If `prefers-color-scheme` is not supported, fall back to light mode.
// In this case, light.css will be downloaded with `highest` priority.
if (window.matchMedia('(prefers-color-scheme: dark)').media === 'not all') {
  document.documentElement.style.display = 'none';
  document.head.insertAdjacentHTML(
      'beforeend',
      '<link rel="stylesheet" href="./css/light.css" onload="document.documentElement.style.display = \'\'">'
  );
}