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

	console.log(cN.id);

	if(date.getSeconds() == "1"){
		cN.id = "num1";
	}else if(date.getSeconds() == "2"){
		cN.id = "num2";
	}else if(date.getSeconds() == "3"){
		cN.id = "num3";
	}else if(date.getSeconds() == "4"){
		cN.id = "num4";
	}else if(date.getSeconds() == "5"){
		cN.id = "num5";
	}else if(date.getSeconds() == "6"){
		cN.id = "num6";
	}else if(date.getSeconds() == "7"){
		cN.id = "num7";
	}else if(date.getSeconds() == "8"){
		cN.id = "num8";
	}else if(date.getSeconds() == "9"){
		cN.id = "num9";
	}else{
		cN.id = "num0";
	}

}