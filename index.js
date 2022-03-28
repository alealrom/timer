window.onload = timer;

var l = document.getElementById("timer");
var button = document.getElementById("stopButton");
var number = 100;

function timer() {
  l.innerHTML = number;
  if (number == 0) {
    console.log('Time Over');
  } else if (number -= 1);
    time = setTimeout("timer()", 1000);
  }
  button.addEventListener("click", () => {
    clearInterval(time);
  })
