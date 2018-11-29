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
	var cN = document.getElementById('num');

	console.log(cN.className);

	if(date.getSeconds() == "1"){
		cN.className = "num1";
	}else if(date.getSeconds() == "2"){
		cN.className = "num2";
	}else if(date.getSeconds() == "3"){
		cN.className = "num3";
	}else if(date.getSeconds() == "4"){
		cN.className = "num4";
	}else if(date.getSeconds() == "5"){
		cN.className = "num5";
	}else if(date.getSeconds() == "6"){
		cN.className = "num6";
	}else if(date.getSeconds() == "7"){
		cN.className = "num7";
	}else if(date.getSeconds() == "8"){
		cN.className = "num8";
	}else if(date.getSeconds() == "9"){
		cN.className = "num9";
	}else{
		cN.className = "num0";
	}

}