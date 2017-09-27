function onReady(){
	console.log('Hello Chapter 2');

	var clock = new Clock('clock');
	var clock2 = new Clock('clock2');
}

function Clock(id) {
		this.updateClock = function(){
			var date = new Date();

			var clock = document.getElementById(id);
			clock.innerHTML = this.formatDigits(date.getHours()) + ":" + this.formatDigits(date.getMinutes()) +":"+ this.formatDigits(date.getSeconds()) ;
		};

		this.formatDigits = function(val){
			if(val<10) val = "0" + val;

			return val;
		}

	var that = this;
	setInterval(function(){
		console.log(that);
		that.updateClock();},1000);
	this.updateClock();
}

window.onload = onReady;

//follow me at https://twitter.com/02geek
//learn more about me at http://02geek.com