function onReady(){
	console.log('Hello Chapter 2');


	setInterval(updateClock,1000);
	updateClock();
}

function updateClock(){
	var date = new Date();

	var clock = document.getElementById('clock');

	clock.innerHTML = formatDigits(date.getHours()) + ":" + formatDigits(date.getMinutes()) +":"+ formatDigits(date.getSeconds()) ;
}

function formatDigits(val){
	if(val<10) val = "0" + val;

	return val;
}

window.onload = onReady;

//follow me at https://twitter.com/02geek
//learn more about me at http://02geek.com