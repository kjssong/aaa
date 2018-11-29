window.onload = function(){
	startInterval();	
	//printCurrentDate();

	numChange();
}
function startInterval() {
	setInterval(numChange, 1000);
}
function printCurrentDate() {
	var date = new Date();
	document.getElementById("y").innerHTML = date.getFullYear();
	document.getElementById("m").innerHTML = date.getMonth() + 1;
	document.getElementById("d").innerHTML = date.getDate();
	document.getElementById("h").innerHTML = date.getHours();
	document.getElementById("tm").innerHTML = date.getMinutes();
	document.getElementById("s").innerHTML = date.getSeconds();
}


function numChange(){
	var date = new Date();
	var cN = document.getElementsByClassName('num')[0];

	console.log(cN.classList);

	if(date.getSeconds() == "1"){
		cN.classList = "num1";
	}else if(date.getSeconds() == "2"){
		cN.classList = "num2";
	}else if(date.getSeconds() == "3"){
		cN.classList = "num3";
	}else if(date.getSeconds() == "4"){
		cN.classList = "num4";
	}else if(date.getSeconds() == "5"){
		cN.classList = "num5";
	}else if(date.getSeconds() == "6"){
		cN.classList = "num6";
	}else if(date.getSeconds() == "7"){
		cN.classList = "num7";
	}else if(date.getSeconds() == "8"){
		cN.classList = "num8";
	}else if(date.getSeconds() == "9"){
		cN.classList = "num9";
	}else{
		cN.classList = "num0";
	}

}