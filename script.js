
function clock() {
	var clock = document.getElementById('clock');
	console.log(clock);

var currentTime = new Date();

var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();
var time = "AM";

if (hours > 12)

{
	hours = hours - 12;
	var am ="pm";
}
    hours = hours < 10 ? "0" + hours : hours;
    minutes =  minutes < 10 ? "0" + minutes : minutes;
	seconds = seconds < 10 ? "0" + seconds : seconds;

  var time =  hours + ':' + minutes + ':' + seconds + ':' + ' ' + time + "!";
clock.innerHTML = time;
}
var interval = setInterval(clock, 1000);
 
