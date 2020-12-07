/* showing nav*/
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

/* close nav */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}


function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";

    if(h == 0){
        h = 12;
    }

    if(h > 12){
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("display").innerText = time;
    document.getElementById("display").textContent = time;

    setTimeout(showTime, 1000);
}
showTime();




function randomlinks(){
    var myrandom=Math.round(Math.random()*9)
    var links=new Array()
    links[0]="https://wangkevin20.github.io/lemons/lemons.html"
    links[1]="https://wangkevin20.github.io/dancing/dancing.html"
    links[2]="https://wangkevin20.github.io/stop/stop.html"
    links[3]="https://wangkevin20.github.io/isthecomputeron/isthecomputeron.html"
    links[4]="https://alwaysjudgeabookbyitscover.com/"
    links[5]="http://www.staggeringbeauty.com/"
    links[6]="http://hasthelargehadroncolliderdestroyedtheworldyet.com/"
    links[7]="https://dadlaughbutton.com/"

    window.location=links[myrandom]
}
