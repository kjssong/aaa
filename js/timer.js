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
    var cNa = document.getElementById('numA');
    var cNb = document.getElementById('numB');
    var dateArray = date.getSeconds().toString().split('');

    console.log(cNa.className);
    
    console.log(dateArray);

	if(date.getSeconds() == "1"){
        cNb.className = "num1";
	}else if(date.getSeconds() == "2"){
        cNb.className = "num2";
	}else if(date.getSeconds() == "3"){
        cNb.className = "num3";
	}else if(date.getSeconds() == "4"){
        cNb.className = "num4";
	}else if(date.getSeconds() == "5"){
        cNb.className = "num5";
	}else if(date.getSeconds() == "6"){
        cNb.className = "num6";
	}else if(date.getSeconds() == "7"){
        cNb.className = "num7";
	}else if(date.getSeconds() == "8"){
        cNb.className = "num8";
	}else if(date.getSeconds() == "9"){
        cNb.className = "num9";
	}else{
		cN.className = "num0";
	}

}