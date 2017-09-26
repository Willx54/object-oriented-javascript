function onReady() {
	console.log('Hello Chapter 1');

	var date = new Date();

	console.log(date.getHours());
	console.log(date.getMinutes());
	console.log(date.getSeconds());

	var clock = document.getElementById('clock');

	clock.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

window.onload = onReady;

//follow me at https://twitter.com/02geek
//learn more about me at http://02geek.com