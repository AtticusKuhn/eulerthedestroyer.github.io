document.getElementById("startbtn").addEventListener("click", start);
var bossmade = false;
if (localStorage.skip == true || localStorage.skip == "true") {
    var level = 1;
} else {
    var level = 0;
}


document.getElementById("startover").addEventListener("click", function () {
    location.reload();
});
document.getElementById("buymobility").addEventListener("click", function () {
    if (Number(localStorage.score) > 2000 && !(localStorage.mobility)) {
        localStorage.score = Number(localStorage.score) - 2000;
        localStorage.mobility = true;
        console.log("buying");
    }
    if (localStorage.mobility == 'true' || localStorage.mobility == true) {
        document.getElementById("buymobility").innerText = "Click to Disable Mobility"
        setTimeout(function () { localStorage.mobility = false; }, 10);
        console.log("turing off");
    }
    if (localStorage.mobility == 'false' || localStorage.mobility == false) {
        console.log("turing on");
        document.getElementById("buymobility").innerText = "Click to Enable Mobility"
        setTimeout(function () { localStorage.mobility = true; }, 10);
    }
});
if (localStorage.mobility == 'true' || localStorage.mobility == true) {
    document.getElementById("buymobility").innerText = "Click to Disable Mobility"
}
if (localStorage.mobility == 'false' || localStorage.mobility == false) {
    document.getElementById("buymobility").innerText = "Click to Enable Mobility"
}
document.getElementById("buyskip").addEventListener("click", function () {
    if (Number(localStorage.score) > 10000 && !(localStorage.skip)) {
        localStorage.score = Number(localStorage.score) - 10000;
        localStorage.skip = true;
        console.log("buying");
    }
    if (localStorage.skip == 'true' || localStorage.skip == true) {
        document.getElementById("buyskip").innerText = "Click to Disable skip"
        setTimeout(function () { localStorage.skip = false; }, 10);
        console.log("turing off");
    }
    if (localStorage.skip == 'false' || localStorage.skip == false) {
        console.log("turing on");
        document.getElementById("buyskip").innerText = "Click to Enable skip"
        setTimeout(function () { localStorage.skip = true; }, 10);
    }
});
if (localStorage.skip == 'true' || localStorage.skip == true) {
    document.getElementById("buyskip").innerText = "Click to Disable skip"
}
if (localStorage.skip == 'false' || localStorage.skip == false) {
    document.getElementById("buyskip").innerText = "Click to Enable skip"
}
document.getElementById("storebtn").addEventListener("click", function () {
    document.getElementById("store").style.display = "block";
    if (localStorage.score) { document.getElementById("pointsholder").innerText = `${localStorage.score} points`; }
});
document.getElementById("infobtn").addEventListener("click", function () {
    document.getElementById("info").style.display = "block";
});
document.getElementById("achbtn").addEventListener("click", function () {
    document.getElementById("ach").style.display = "block";
    for (i = 0; i < 99; i++) {
        if (localStorage.getItem(i) == true || localStorage.getItem(i) == "true") {
            para = document.createElement("P");
            para.innerText = `Beat level ${i}`;
            document.getElementById("ach").appendChild(para);
        }
    }
});
var over = false;
function start() {
    document.getElementById("title").style.display = "none"
    yval = 100;
    xval = 500
    $(window).on('keydown', e => {
        if (yval > 100) {
            if (localStorage.mobility == true) {
                yval = yval - 10;
            }
            yval = yval - 10;
            ypos = yval + "px";
            document.getElementById("player").style.top = ypos;
        }
    });
    var deaths = 0;
    var i = 1;                     //  set your counter to 1
    function myLoop() {           //  create a loop function
        setTimeout(function () {    //  call a 3s setTimeout 
            if (yval < 300) {
                yval++;
                ypos = yval + "px";
                document.getElementById("player").style.top = ypos;
            }
            /*
            for(t=0;t< document.getElementsByClassName("no").length;t++){
              var xclone = document.getElementsByClassName("no")[t].style.left;   
            }
            */
            i++;                     //  increment the counter
            myLoop();             //  ..  again which will  
        }, 10)
    }
    var iter = 0;
    myLoop();
    function obstacle() {
        iter++
        obs = document.createElement("div");
        if (level == 0 && iter % 3 == 0) {
            (obs).style.backgroundColor = "black";
            obs.style.width = "10px";
            obs.style.height = "10px";
            xpos = xval + "px";
            obs.style.left = xpos;
            obs.className = "no";
            obs.style.position = "absolute";
            obs.style.top = `${Math.random() * 200 + 100}px`;
            iter++
            document.body.appendChild(obs);
        } else if (level == 1) {
            (obs).style.backgroundColor = "orange";
            obs.style.width = "7px";
            obs.style.height = "7px";
            xpos = xval + "px";
            obs.style.left = xpos;
            obs.className = "no";
            obs.style.position = "absolute";
            obs.style.top = `${Math.random() * 200 + 100}px`
            document.body.appendChild(obs);
            document.getElementById("enemy").innerText = "zoomer";
            document.getElementById("enemy").style.color = "orange";
        } else if (level == 2 && iter % 2 == 0) {
            (obs).style.backgroundColor = "red";
            obs.style.width = "15px";
            obs.style.height = "15px";
            xpos = xval + "px";
            obs.style.left = "200px";
            obs.className = "no";
            obs.style.position = "absolute";
            obs.style.top = `${Math.random() * 200 + 100}px`
            document.body.appendChild(obs);
            document.getElementById("enemy").innerText = "ambusher";
            document.getElementById("enemy").style.color = "red";
        } else if (level == 3) {
            (obs).style.backgroundColor = "blue";
            obs.style.width = "10px";
            obs.style.height = "10px";
            xpos = xval + "px";
            obs.style.left = "500px";
            obs.className = "no";
            obs.style.position = "absolute";
            obs.style.top = `${Math.random() * 200 + 100}px`
            document.body.appendChild(obs);
            document.getElementById("enemy").innerText = "hider";
            document.getElementById("enemy").style.color = "blue";
        } else if (level == 4) {
            (obs).style.backgroundColor = "yellow";
            obs.style.width = "4px";
            obs.style.height = "4px";
            xpos = xval + "px";
            obs.style.left = "700px";
            obs.className = "no";
            obs.style.position = "absolute";
            obs.style.top = `${Math.random() * 200 + 100}px`
            document.body.appendChild(obs);
            document.getElementById("enemy").innerText = "accelerator";
            document.getElementById("enemy").style.color = "yellow";
        } else if (level == 5) {
            (obs).style.backgroundColor = "gray";
            obs.style.width = "4px";
            obs.style.height = "4px";
            xpos = xval + "px";
            obs.style.left = "700px";
            obs.className = "no";
            obs.style.position = "absolute";
            obs.style.top = `${Math.random() * 200 + 100}px`
            document.body.appendChild(obs);
            document.getElementById("enemy").innerText = "skewer";
            document.getElementById("enemy").style.color = "gray";
        } else if (level == 6 && bossmade == false) {
            (obs).style.backgroundColor = "white";
            obs.style.borderStyle = "dotted"
            obs.style.width = "20px";
            obs.style.height = "20px";
            xpos = xval + "px";
            obs.style.left = "700px";
            obs.className = "boss";
            obs.style.position = "absolute";
            obs.style.top = `${Math.random() * 200 + 100}px`
            document.body.appendChild(obs);
            document.getElementById("enemy").innerText = "Boss: Simplex";
            bossmade = true;
            document.getElementById("enemy").style.color = "black";
        }
    }
    obstacle();
    function myLoop2() {           //  create a loop function
        setTimeout(function () {    //  call a 3s setTimeout when the loop is called
            obstacle();
            iter++
            if (over == false) {
                myLoop2();
            }
            xpos = xval + "px";
            obs.style.left = xpos;            //  ..  again 
        }, 1000)
    }
    myLoop2();
    function myLoop3() {           //  create a loop function
        setTimeout(function () {    //  call a 3s setTimeout when the loop is called
            var el = document.getElementsByClassName("no");
            for (i = 0; i < el.length; i++) {
                var curpos = el[i].style.left;
                curtrim = curpos.substring(0, curpos.indexOf("p"));
                var curposy = el[i].style.top;
                curpostrimy = curposy.substring(0, curposy.indexOf("p"));
                if (el[i].style.backgroundColor == "black") {
                    curtrim = curtrim - 1;
                }
                if (el[i].style.backgroundColor == "orange") {
                    curtrim = curtrim - 8;
                }
                if (el[i].style.backgroundColor == "red" && (time % 5 == i % 5)) {
                    curtrim = curtrim - 30;
                }
                if (el[i].style.backgroundColor == "blue" && (curtrim < 300) && (curtrim > 150)) {

                    el[i].style.display = "none";
                }
                if (el[i].style.backgroundColor == "blue" && (curtrim < 150)) {

                    el[i].style.display = "block";
                }
                if (el[i].style.backgroundColor == "blue") {
                    curtrim = curtrim - 4;

                }
                if (el[i].style.backgroundColor == "yellow") {
                    curtrim = curtrim - 0.07 * ((700 - curtrim));

                }
                if (el[i].style.backgroundColor == "gray") {
                    curtrim = curtrim - 3;
                    if (time % 2 == 0 && curpostrimy < 300) {
                        curpostrimy = curpostrimy + 2 * Math.sin(i);
                    } else if (time % 2 == 1 && curpostrimy > 100) {
                        curpostrimy = curpostrimy - 2 * Math.sin(i);

                    }
                    el[i].style.top = `${curpostrimy}px`;
                }
                var newpos = `${curtrim}px`;
                el[i].style.left = newpos;
                var heightnum = el[i].style.height.substring(0, el[i].style.height.indexOf("p"));
                if (curtrim < 30) {
                    el[i].remove();
                }
                if ((Math.abs(curpostrimy - yval) < (1.2 * heightnum)) && (curtrim < 45) && (curtrim > 15)) {
                    deaths++;
                    if (localStorage.highscore) {
                        if (Number(localStorage.highscore > time)) {
                            localStorage.highscore = time;
                        }
                    } else {
                        localStorage.highscore = time;
                    }
                    document.getElementById("gameoverscreen").innertext = `gameover. Your score was ${time} and highscore was ${localStorage.highscore}`;
                    document.getElementById("gameoverscreen").style.display = "block";
                    over = true;
                    el[i].remove();
                    for (t = 0; t < el.length; t++) {
                        el[t].remove();
                    }

                    document.getElementById("over").innerText = `${deaths} deaths`;

                    if (localStorage.score) {
                        localStorage.score = Number(localStorage.score) + time;


                    } else {
                        localStorage.score = time;
                    }

                }


                if (yval == 300) {
                    deaths++;
                    document.getElementById("gameoverscreen").style.display = "block";
                    over = true;
                    el[i].remove();
                    for (t = 0; t < el.length; t++) {
                        el[t].remove();
                    }
                }

            }
            myLoop3();
        }, 8)
    }
    var time = 0
    myLoop3();
    function myLoop4() {           //  create a loop function
        setTimeout(function () {    //  call a 3s setTimeout when the loop is called
            time++;
            document.getElementById("time").innerText = `${time} seconds survived`;
            myLoop4();
        }, 1000)
    }
    myLoop4();
    function myLoop5() {           //  create a loop function
        setTimeout(function () {    //  call a 3s setTimeout 
            level++;
            localStorage.setItem(`${level}`, true);
            document.getElementById("level").innerText = `${level} level`;
            myLoop5();
        }, 30e3)
    }

    myLoop5();
    localStorage.setItem(`${level}`, true);



    function myLoop6() {           //  create a loop function
        setTimeout(function () {    //  call a 3s setTimeout 

            if (over == false) {
                var el = document.getElementsByClassName("no");
                var threat = el[0];
                var curposo = threat.style.top;
                curtrimo = curposo.substring(0, curposo.indexOf("p"));
                var curposp = document.getElementById("player").style.top;
                curtrimp = curposp.substring(0, curposp.indexOf("p"));
                if (curtrimp > (curtrimo + 100)) {
                    curtrimp = curtrimp - 10;
                    document.getElementById("player").style.top = `${curtrimp}px`;
                }
            }
            myLoop6();
        }, 1)
    }

    function bossloop() {           //  create a loop f
        setTimeout(function () {    //  call a 3s setTimeout 
            if (level == 6) {
                var boss = document.getElementsByClassName("boss")[0];
                var bossx = boss.style.left.substring(0, boss.style.top.indexOf("p") - 4);
                var bossy = boss.style.top.substring(0, boss.style.top.indexOf("p") - 4);
                if (bossx == 30) {
                    bossx = 700;
                }
                bossy = Math.random() * 200 + 100;
                boss.style.top = `${bossy}px`;
                leftboss();


                function leftboss() {           //  create a loop function
                    setTimeout(function () {    //  call a 3s setTimeout 
                        if (bossx == 30) {
                            bossx = 700;
                        }
                        //console.log(bossx);
                        //console.log(boss.style.left);

                        bossx = bossx - 10;
                        boss.style.left = `${bossx}px`;
                        leftboss();
                    }, 1)
                }
            }
            bossloop();
        }, 1000)
    }

    bossloop();


}




