window.onload = function(){
        startInterval();
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
        var tSa = document.getElementById('numSA');
        var tSb = document.getElementById('numSB');
        var dateArray = date.getSeconds().toString().split('');

        if(dateArray <= 9){
                dateArray = "0" + dateArray;
        }

        /*초 - 첫번째 자리*/
        if(dateArray[0] == "1"){
                tSa.className = "num1";
        }else if(dateArray[0] == "2"){
                tSa.className = "num2";
        }else if(dateArray[0] == "3"){
                tSa.className = "num3";
        }else if(dateArray[0] == "4"){
                tSa.className = "num4";
        }else if(dateArray[0] == "5"){
                tSa.className = "num5";
        }else{
                tSa.className = "num0";
        }

        /*초 - 두번째 자리*/
        if(dateArray[1] == "1"){
                tSb.className = "num1";
        }else if(dateArray[1] == "2"){
                tSb.className = "num2";
        }else if(dateArray[1] == "3"){
                tSb.className = "num3";
        }else if(dateArray[1] == "4"){
                tSb.className = "num4";
        }else if(dateArray[1] == "5"){
                tSb.className = "num5";
        }else if(dateArray[1] == "6"){
                tSb.className = "num6";
        }else if(dateArray[1] == "7"){
                tSb.className = "num7";
        }else if(dateArray[1] == "8"){
                tSb.className = "num8";
        }else if(dateArray[1] == "9"){
                tSb.className = "num9";
        }else{
                tSb.className = "num0";
        }
}