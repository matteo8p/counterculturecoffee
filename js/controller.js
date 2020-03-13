const primaryButton = document.getElementById('initiate');
const body = document.getElementById('body');                 //Use body to control background color   
const timer = document.getElementById('timer');               //HTML Tag with the timer object HH:MM:SS
const form = document.getElementById('form');

var machine_running = false;                                  //The machine is not running at the beginning

var seconds = 0, minutes = 0, hours = 0, t;

function initiateRoast()                                    //When the start button is clicked.
{
    if(!machine_running)                                    //START MACHINE                  
    {
        primaryButton.innerHTML = "Stop";
        body.style.backgroundColor = "rgb(213, 252, 221)";
        primaryButton.style.backgroundColor = "rgb(252, 215, 213)";

        form.style.visibility = "hidden";
        startTimer();
    }else                                                   //STOP MACHINE
    {
        primaryButton.innerHTML = "Resume";
        body.style.backgroundColor = "rgb(252, 215, 213)";
        primaryButton.style.backgroundColor = "rgb(213, 252, 221)";

        form.style.visibility = "visible";
        stopTimer(); 
    }
    machine_running = !machine_running;     //flips status of variable machine_running
}


function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    timer.innerHTML = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
    startTimer(); 
}

function startTimer() 
{
    t = setTimeout(add, 1000);
}

function stopTimer()
{
    clearTimeout(t);
}

function submit()
{
    var time = timer.innerHTML; 
    var sku = document.getElementById('sku').value;     
    var batches = document.getElementById('batches').value; 
    var weight = document.getElementById('weight').value;
    var notes = document.getElementById('notes').value; 

    window.location.href = "submitted.html";                                                //relocate back to submitted page
}
