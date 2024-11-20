//your JS code here. If required.
let timerDisply = document.getElementById("timer");
let currentDate = new Date();

setInterval(
	function(){
		currentDate = new Date();
		timerDisply.innerHTML = currentDate.toLocaleString();
	},1000
)
