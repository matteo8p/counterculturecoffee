// JavaScript Document
let start = 0; 
let elapsed = 0; 

function clickStart()
{
	google.script.run.startTime(); 
	
	document.getElementById("bg").style.backgroundColor = "rgb(219, 250, 218)";
	document.getElementById("message").innerHTML = "Coffee Machine Initiated";
	start = Date.now(); 
}

function clickStop()
{
	var batches = document.getElementById("batches").value;
    var weight = document.getElementById("weight").value; 
    
    if(batches.length == 0 || weight == 0)
    {
       alert("Strings empty"); 
       return; 
    }
	var timeElapsed = msToTime(elapsed - start);
	
    google.script.run.endTime(timeElapsed, batches, weight); 
	
	document.getElementById("message").innerHTML = "Coffee Machine Stopped";
	document.getElementById("bg").style.backgroundColor = "rgb(252, 220, 220)";
	elapsed = Date.now(0);
	
	document.getElementById("time").innerHTML = "Time Elapsed: " + timeElapsed; 
}

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds + "." + milliseconds + " (hh:mm:ss)";
}