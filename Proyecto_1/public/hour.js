function getCurrentTime() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  return [hours, minutes, seconds];
}

function formatHour() {
  var time = getCurrentTime();
  var format = time[2] % 2 == 0 ? addDigit(time[0]) + ":" + addDigit(time[1]) :
    addDigit(time[0]) + " " + addDigit(time[1]);
  return format;
}

function addDigit(value) {
  var newValue = value > 9 ? value : "0" + String(value);
  return newValue;
}

function setFormat() {
  localTime.textContent = "Hora local: " + formatHour();
}

setFormat();
setInterval(setFormat, 1000);
