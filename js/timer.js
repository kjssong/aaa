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
        var tHa = document.getElementById('numHA');
        var tHb = document.getElementById('numHB');
        var tMa = document.getElementById('numMA');
        var tMb = document.getElementById('numMB');
        var tSa = document.getElementById('numSA');
        var tSb = document.getElementById('numSB');
        var dateHArray = date.getHours().toString().split('');
        var dateMArray = date.getMinutes().toString().split('');
        var dateSArray = date.getSeconds().toString().split('');

        /*시*/
        if(dateHArray <= 9 && dateMArray <= 9 && dateSArray <= 9){
                dateHArray = "0" + dateHArray;
                dateMArray = "0" + dateMArray;
                dateSArray = "0" + dateSArray;
        }

        if(dateHArray[0] == "1"){
                tHa.className = "num1";
        }else{
                tHa.className = "num0";
        }

        if(dateHArray[1] == "1"){
                tHb.className = "num1";
        }else if(dateHArray[1] == "2"){
                tHb.className = "num2";
        }else if(dateHArray[1] == "3"){
                tHb.className = "num3";
        }else if(dateHArray[1] == "4"){
                tHb.className = "num4";
        }else if(dateHArray[1] == "5"){
                tHb.className = "num5";
        }else if(dateHArray[1] == "6"){
                tHb.className = "num6";
        }else if(dateHArray[1] == "7"){
                tHb.className = "num7";
        }else if(dateHArray[1] == "8"){
                tHb.className = "num8";
        }else if(dateHArray[1] == "9"){
                tHb.className = "num9";
        }else{
                tHb.className = "num0";
        }

        /*분*/
        if(dateMArray[0] == "1"){
                tMa.className = "num1";
        }else if(dateMArray[0] == "2"){
                tMa.className = "num2";
        }else if(dateMArray[0] == "3"){
                tMa.className = "num3";
        }else if(dateMArray[0] == "4"){
                tMa.className = "num4";
        }else if(dateMArray[0] == "5"){
                tMa.className = "num5";
        }else{
                tMa.className = "num0";
        }

        if(dateMArray[1] == "1"){
                tMb.className = "num1";
        }else if(dateMArray[1] == "2"){
                tMb.className = "num2";
        }else if(dateMArray[1] == "3"){
                tMb.className = "num3";
        }else if(dateMArray[1] == "4"){
                tMb.className = "num4";
        }else if(dateMArray[1] == "5"){
                tMb.className = "num5";
        }else if(dateMArray[1] == "6"){
                tMb.className = "num6";
        }else if(dateMArray[1] == "7"){
                tMb.className = "num7";
        }else if(dateMArray[1] == "8"){
                tMb.className = "num8";
        }else if(dateMArray[1] == "9"){
                tMb.className = "num9";
        }else{
                tMb.className = "num0";
        }

        /*초*/     
        if(dateSArray[0] == "1"){
                tSa.className = "num1";
        }else if(dateSArray[0] == "2"){
                tSa.className = "num2";
        }else if(dateSArray[0] == "3"){
                tSa.className = "num3";
        }else if(dateSArray[0] == "4"){
                tSa.className = "num4";
        }else if(dateSArray[0] == "5"){
                tSa.className = "num5";
        }else{
                tSa.className = "num0";
        }

        if(dateSArray[1] == "1"){
                tSb.className = "num1";
        }else if(dateSArray[1] == "2"){
                tSb.className = "num2";
        }else if(dateSArray[1] == "3"){
                tSb.className = "num3";
        }else if(dateSArray[1] == "4"){
                tSb.className = "num4";
        }else if(dateSArray[1] == "5"){
                tSb.className = "num5";
        }else if(dateSArray[1] == "6"){
                tSb.className = "num6";
        }else if(dateSArray[1] == "7"){
                tSb.className = "num7";
        }else if(dateSArray[1] == "8"){
                tSb.className = "num8";
        }else if(dateSArray[1] == "9"){
                tSb.className = "num9";
        }else{
                tSb.className = "num0";
        }
}