const startStopBtn=document.getElementById("startStopBtn");
const resetBtn=document.querySelector("#resetBtn");

let seconds=0;
let hours=0;
let minutes=0;
let leadingsec=0;
let leadingmin=0;
let leadinghour=0;

let timerInterval=null;
let timerStatus="stopped";

function stopWatch(){
    seconds++;

    if(seconds/60 ===1){
        minutes++;
        seconds=0;
 
        if(minutes/60 ===1){
        minutes=0;
        hours++;
        }
    }
    if(seconds<10){
        leadingsec="0"+seconds.toString();
    }
    else{
        leadingsec=seconds;
    }

    if(minutes<10){
        leadingmin="0"+minutes.toString();
    }
    else{
        leadingmin=minutes;
    }

    if(hours<10){
        leadinghour="0"+hours.toString();
    }
    else{
        leadinghour=hours;
    }

    let disp=document.getElementById("timer").innerText= leadinghour+":"+ leadingmin+":"+ leadingsec;
}

startStopBtn.addEventListener('click',function(){

if(timerStatus==="stopped"){
    timerInterval=window.setInterval(stopWatch,1000);
    document.getElementById("startStopBtn").innerHTML='⏸️';
    timerStatus="started";
}
else{
    window.clearInterval(timerInterval);
    document.getElementById("startStopBtn").innerHTML="▶️";
    timerStatus="stopped";
}

});


resetBtn.addEventListener('click',function(){

    window.clearInterval(timerInterval);
    seconds=0;
    hours=0;
    minutes=0;

    document.getElementById("timer").innerText="00:00:00";

})