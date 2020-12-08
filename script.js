
//bulid a clock 

function clock() {
	var clock = document.getElementById('clock');
	console.log(clock);

var currentTime = new Date();

var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();
var time = "AM";

if (hours == 0)
  hours = 12

{
  if (hours > 12)
	hours = hours - 12;
	var time ="PM";
}
    hours = hours < 10 ? "0" + hours : hours;
    minutes =  minutes < 10 ? "0" + minutes : minutes;
	seconds = seconds < 10 ? "0" + seconds : seconds;

  var time =  hours + ':' + minutes + ':' + seconds + ':' + ' ' + time + "!";
clock.innerHTML = time;
}
var interval = setInterval(clock, 1000);

//change background image based on time.


  var d = new Date();
  var m = d.getHours();
  var time = "AM";

  if (m <= 12 ) {
    document.body.className = 'morning';

  var time ="pm";
  }
  else if (m >= 13 && m < 20)
  {
    document.body.className = 'afternoon';
  }
  else {
    document.body.className = 'night';
    
    }
  console.log('test');

  //change text massage based on time.

  if (m <= 12 ) {
    document.querySelector('h1').innerHTML ='Good morning!';

  }
  else if(m >= 12 && m < 16) {
    document.querySelector('h1').innerHTML ='Good afternoon!';
  }
  else {
    document.querySelector('h1').innerHTML ='Good night!';
  }




     

