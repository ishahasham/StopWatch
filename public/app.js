var hourHeading=document.getElementById("hour")
var minHeading=document.getElementById("min")
var secHeading=document.getElementById("sec")
var msecHeading=document.getElementById("msec")
var hour=0
var min=0
var sec=0
var msec=0
var timer=false;

function stopWatch(){
    if(timer==true){
        msec++
        msecHeading.innerHTML=msec;
        if(msec >=100){
            sec++
            secHeading.innerHTML=sec;
            msec=0
        }
        if(sec >=60){
            min++
            minHeading.innerHTML=min;
            sec=0
        }
        if(min>= 60){
            hour++
            hourHeading.innerHTML=hour;
            min=0
            sec=0
        }
        setTimeout("stopWatch()",10)
    }
    
}

function start(){
    if(!timer){
        timer=true;
        stopWatch()
    }
}
function stop(){
    timer=false;


}
function reset(){
    timer=false;
    hour=0
    min=0
    sec=0
    msec=0

    document.getElementById("hour").innerHTML=hour
    document.getElementById("min").innerHTML=min 
    document.getElementById("sec").innerHTML=sec
    document.getElementById("msec").innerHTML=msec
}