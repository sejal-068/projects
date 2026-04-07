let clock =document.querySelector("#clock");

function updateclock(){
    let now =  new Date();

let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  clock.innerText= h + ":"+ m +":"  + s;
}
setInterval(updateclock, 1000);

