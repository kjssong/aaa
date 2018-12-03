window.onload = function(){
	startInterval();	
	//printCurrentDate();

    numChange();
    timer();
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
    
    if(dateArray <= 9){
        dateArray = "0" + dateArray;
    }

    /*초 - 첫번째 자리*/
    if(dateArray[0] == "1"){
        cNa.className = "num1";
	}else if(dateArray[0] == "2"){
        cNa.className = "num2";
	}else if(dateArray[0] == "3"){
        cNa.className = "num3";
	}else if(dateArray[0] == "4"){
        cNa.className = "num4";
	}else if(dateArray[0] == "5"){
        cNa.className = "num5";
	}else{
		cNa.className = "num0";
    }
    
    /*초 - 두번째 자리*/
	if(dateArray[1] == "1"){
        cNb.className = "num1";
	}else if(dateArray[1] == "2"){
        cNb.className = "num2";
	}else if(dateArray[1] == "3"){
        cNb.className = "num3";
	}else if(dateArray[1] == "4"){
        cNb.className = "num4";
	}else if(dateArray[1] == "5"){
        cNb.className = "num5";
	}else if(dateArray[1] == "6"){
        cNb.className = "num6";
	}else if(dateArray[1] == "7"){
        cNb.className = "num7";
	}else if(dateArray[1] == "8"){
        cNb.className = "num8";
	}else if(dateArray[1] == "9"){
        cNb.className = "num9";
	}else{
		cNb.className = "num0";
	}
}


function timer(){
    var time = 10;
    var timeSec = function(){
        time--;
        
        if(time == 5){
            console.log("5");
        }

        document.getElementById("timer").innerHTML = time;
    }
    setInterval(timeSec, 1000);
}