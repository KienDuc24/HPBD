const target_date = new Date(2024, 0, 27); // Tháng trong JavaScript bắt đầu từ 0 (0 = Tháng 1)
 // set the countdown date
var days, hours, minutes, seconds; // variables for time units

var countdown = document.getElementById("tiles"); // get tag element

getCountdown();

setInterval(function () { getCountdown(); }, 1000);

function getCountdown(){

	// find the amount of "seconds" between now and target
	var current_date = new Date().getTime();
	var seconds_left = (target_date - current_date) / 1000;

	days = pad( parseInt(seconds_left / 86400) );
	seconds_left = seconds_left % 86400;
		 
	hours = pad( parseInt(seconds_left / 3600) );
	seconds_left = seconds_left % 3600;
		  
	minutes = pad( parseInt(seconds_left / 60) );
	seconds = pad( parseInt( seconds_left % 60 ) );

	// format countdown string + set tag value
	countdown.innerHTML = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>"; 

    if(seconds_left==0)
        document.getElementById('Checkdate_btn').style.display = "block";

}

function pad(n) {
	return (n < 10 ? '0' : '') + n;
}


function Checkdate(){
    document.getElementById('checkdate').style.display = "none";
}

function Music(){
    document.getElementById("hpbd_audio").play();
}

function Effect(){
    
}    