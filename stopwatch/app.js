let start= document.querySelector(".control-btn1");
let seconds=0;
let min=0;
let hour=0;
let timer=null;
let totalT="";
start.addEventListener("click", function(){
    console.log("start button was clicked")
    if(timer==null){
        timer= setInterval(() => {
        seconds++;
    
        if(seconds== 60){
            seconds=0;
            min++;

        }
        if(min==60){
            min=0;
            hour++;
        }
       totalT=time.innerText= hour + ":" + min+ ":" + seconds ;

    }, 1000);
    }
    

})


let stop =document.querySelector(".control-btn2");
stop.addEventListener("click", function(){
    clearInterval(timer)
    timer=null;
  alert("your time is:"+totalT );
  seconds=0;
  min=0;
  hour=0;

  totalT= "00:00:00";
  time.innerText=totalT

    

     console.log("stop button was clicked")

})