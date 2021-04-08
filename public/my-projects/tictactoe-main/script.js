var turn = 0;
var over = false;
for (t = 1; t < 82; t++) {
    addlist(t);
    document.getElementById(t).style.backgroundColor = "green"
}
function addlist(t) {
    document.getElementById(t).addEventListener("click", function () {
        if (document.getElementById(t).style.backgroundColor == "green") {
            for (p = 1; p < 82; p++) {
                if (document.getElementById(p).style.backgroundColor == "green" || document.getElementById(p).style.backgroundColor == "black") {
                    if (document.getElementById(p).className.includes(boxrestrict(t))) {
                        document.getElementById(p).style.backgroundColor = "green";
                    } else {
                        document.getElementById(p).style.backgroundColor = "black";
                    }
                }
            }
            if (turn % 2 == 0) {
                document.getElementById(t).style.backgroundColor = "blue";
                turn++;
                document.getElementById("turn").innerText = `turn ${turn}: red turn`;
                document.getElementById("turn").style.color = "red";
            } else {
                document.getElementById(t).style.backgroundColor = "red";
                turn++;
                document.getElementById("turn").innerText = `turn ${turn}: blue turn`;
                document.getElementById("turn").style.color = "blue";
            }
            if (wincheck(t) == true) {
                var smct = document.getElementById(t).className.substring(0, document.getElementById(t).className.indexOf(" "));
                smct = smct.trim();
                for (p = 1; p < 82; p++) {
                    var smcp = document.getElementById(p).className.substring(0, document.getElementById(p).className.indexOf(" "));
                    var cl = document.getElementById(p).className.substring(document.getElementById(p).className.indexOf(" "), document.getElementById(p).className.length);
                    cl = cl.trim();
                    smcp = smcp.trim();
                    if (smct == smcp && cl == "midmid" && document.getElementById(t).style.backgroundColor == "blue") {
                        document.getElementById(p).style.backgroundColor = "purple";
                        var newItem = document.createElement("P");
                        newItem.style.color = "purple";
                        var textnode = document.createTextNode(`turn ${turn}: blue captured square ${p}`);
                        newItem.appendChild(textnode);
                        var list = document.getElementById("gamelog");
                        list.insertBefore(newItem, list.childNodes[0]);
                    } else if (smct == smcp && cl == "midmid" && document.getElementById(t).style.backgroundColor == "red") {
                        document.getElementById(p).style.backgroundColor = "orange";
                        var newItem = document.createElement("P");
                        newItem.style.color = "orange";
                        var textnode = document.createTextNode(`turn ${turn}: red captured square ${p}`);
                        newItem.appendChild(textnode);
                        var list = document.getElementById("gamelog");
                        list.insertBefore(newItem, list.childNodes[0]);
                    } else if (smct == smcp && (document.getElementById(t).style.backgroundColor == "blue" || document.getElementById(t).style.backgroundColor == "red")) {
                        document.getElementById(p).style.backgroundColor = document.getElementById(t).style.backgroundColor
                    } else if (smct == smcp && (document.getElementById(t).style.backgroundColor == "blue" || document.getElementById(t).style.backgroundColor == "purple")) {
                        document.getElementById(p).style.backgroundColor = "blue";
                    } else if (smct == smcp && (document.getElementById(t).style.backgroundColor == "red" || document.getElementById(t).style.backgroundColor == "orange")) {
                        document.getElementById(p).style.backgroundColor = "red";
                    } else if (document.getElementById(p).style.backgroundColor == "black") {
                        document.getElementById(p).style.backgroundColor = "green"
                    }
                }
            }
            if (gameover() == true) {
                setTimeout(function () {
                    for (x = 1; x < 82; x++) {
                        if (document.getElementById(x).style.backgroundColor == "green") {
                            document.getElementById(x).style.backgroundColor = "black"
                        }
                    }
                }, 100);
                alert("game over");
                over = true;
                var newItem = document.createElement("P");
                newItem.style.color = "yellow";
                var textnode = document.createTextNode(`turn ${turn}: GAMEOVER`);
                newItem.appendChild(textnode);
                var list = document.getElementById("gamelog");
                list.insertBefore(newItem, list.childNodes[0]);
                for (p = 1; p < 82; p++) {
                    if (document.getElementById(p).style.backgroundColor == "green") {
                        document.getElementById(p).style.backgroundColor == "black";
                    }
                }
            }
            if (moveable(t) == false) {
                for (p = 1; p < 82; p++) {
                    if (document.getElementById(p).style.backgroundColor == "black") {
                        document.getElementById(p).style.backgroundColor = "green";
                    }
                }
            }
            var gamelogp = document.createElement("P");
            if (turn % 2 == 0) {
                var newItem = document.createElement("P");
                newItem.style.color = "red";
                var textnode = document.createTextNode(`turn ${turn}: red went in ${t}`);
                newItem.appendChild(textnode);
                var list = document.getElementById("gamelog");
                list.insertBefore(newItem, list.childNodes[0]);
            } else {
                var newItem = document.createElement("P");
                newItem.style.color = "blue";
                var textnode = document.createTextNode(`turn ${turn}: blue went in ${t}`);
                newItem.appendChild(textnode);

                var list = document.getElementById("gamelog");
                list.insertBefore(newItem, list.childNodes[0]);
            }
        } //if statement here
        var draw = true;
        for (p = 1; p < 82; p++) {
            if (document.getElementById(p).style.backgroundColor == "green") {
                draw = false;
            }
        }
        if (draw == true) {
            alert("game is a draw");
            var gamelogd = document.createElement("P");
            gamelogd.style.color = "black";
            gamelogd.innerHTML = `game is a draw`;
            document.getElementById("gamelog").appendChild(gamelogd);
        }
        // Insert text

    });
}

function boxrestrict(t) {
    var smc = document.getElementById(t).className.substring(document.getElementById(t).className.indexOf(" "), document.getElementById(t).className.length);
    smc = smc.trim();
    return `big${smc}`
}

function wincheck(t) {
    if (document.getElementById(t).style.backgroundColor !== "green" && document.getElementById(t).style.backgroundColor !== "black") {
        var smc = document.getElementById(t).className.substring(document.getElementById(t).className.indexOf(" "), document.getElementById(t).className.length);
        smc = smc.trim();
        if (smc == "topleft" && document.getElementById(t).style.backgroundColor == document.getElementById(t + 1).style.backgroundColor && document.getElementById(t + 1).style.backgroundColor == document.getElementById(t + 2).style.backgroundColor) {
            return true
        } else if (smc == "topmid" && document.getElementById(t - 1).style.backgroundColor == document.getElementById(t).style.backgroundColor && document.getElementById(t).style.backgroundColor == document.getElementById(t + 1).style.backgroundColor) {
            return true
        } else if (smc == "topright" && document.getElementById(t - 1).style.backgroundColor == document.getElementById(t).style.backgroundColor && document.getElementById(t - 1).style.backgroundColor == document.getElementById(t - 2).style.backgroundColor) {
            return true
        } else if (smc == "midleft" && document.getElementById(t).style.backgroundColor == document.getElementById(t + 1).style.backgroundColor && document.getElementById(t + 1).style.backgroundColor == document.getElementById(t + 2).style.backgroundColor) {
            return true
        } else if (smc == "midmid" && document.getElementById(t - 1).style.backgroundColor == document.getElementById(t).style.backgroundColor && document.getElementById(t).style.backgroundColor == document.getElementById(t + 1).style.backgroundColor) {
            return true
        } else if (smc == "midright" && document.getElementById(t - 1).style.backgroundColor == document.getElementById(t).style.backgroundColor && document.getElementById(t - 1).style.backgroundColor == document.getElementById(t - 2).style.backgroundColor) {
            return true
        } else if (smc == "botleft" && document.getElementById(t).style.backgroundColor == document.getElementById(t + 1).style.backgroundColor && document.getElementById(t + 1).style.backgroundColor == document.getElementById(t + 2).style.backgroundColor) {
            return true
        } else if (smc == "botmid" && document.getElementById(t - 1).style.backgroundColor == document.getElementById(t).style.backgroundColor && document.getElementById(t).style.backgroundColor == document.getElementById(t + 1).style.backgroundColor) {
            return true
        } else if (smc == "botright" && document.getElementById(t - 1).style.backgroundColor == document.getElementById(t).style.backgroundColor && document.getElementById(t - 1).style.backgroundColor == document.getElementById(t - 2).style.backgroundColor) {
            return true
        } else if (smc == "topleft" && document.getElementById(t).style.backgroundColor == document.getElementById(t + 9).style.backgroundColor && document.getElementById(t + 9).style.backgroundColor == document.getElementById(t + 18).style.backgroundColor) {
            return true
        } else if (smc == "topmid" && document.getElementById(t).style.backgroundColor == document.getElementById(t + 9).style.backgroundColor && document.getElementById(t + 9).style.backgroundColor == document.getElementById(t + 18).style.backgroundColor) {
            return true
        } else if (smc == "topright" && document.getElementById(t).style.backgroundColor == document.getElementById(t + 9).style.backgroundColor && document.getElementById(t + 9).style.backgroundColor == document.getElementById(t + 18).style.backgroundColor) {
            return true
        } else if (smc == "midleft" && document.getElementById(t - 9).style.backgroundColor == document.getElementById(t).style.backgroundColor && document.getElementById(t).style.backgroundColor == document.getElementById(t + 9).style.backgroundColor) {
            return true
        } else if (smc == "midmid" && document.getElementById(t - 9).style.backgroundColor == document.getElementById(t).style.backgroundColor && document.getElementById(t).style.backgroundColor == document.getElementById(t + 9).style.backgroundColor) {
            return true
        } else if (smc == "midright" && document.getElementById(t - 9).style.backgroundColor == document.getElementById(t).style.backgroundColor && document.getElementById(t).style.backgroundColor == document.getElementById(t + 9).style.backgroundColor) {
            return true
        } else if (smc == "botleft" && document.getElementById(t).style.backgroundColor == document.getElementById(t - 9).style.backgroundColor && document.getElementById(t - 9).style.backgroundColor == document.getElementById(t - 18).style.backgroundColor) {
            return true
        } else if (smc == "botmid" && document.getElementById(t).style.backgroundColor == document.getElementById(t - 9).style.backgroundColor && document.getElementById(t - 9).style.backgroundColor == document.getElementById(t - 18).style.backgroundColor) {
            return true
        } else if (smc == "botright" && document.getElementById(t).style.backgroundColor == document.getElementById(t - 9).style.backgroundColor && document.getElementById(t - 9).style.backgroundColor == document.getElementById(t - 18).style.backgroundColor) {
            return true
        } else if (smc == "topleft" && document.getElementById(t).style.backgroundColor == document.getElementById(t + 10).style.backgroundColor && document.getElementById(t + 10).style.backgroundColor == document.getElementById(t + 20).style.backgroundColor) {
            return true
        } else if (smc == "midmid" && document.getElementById(t).style.backgroundColor == document.getElementById(t - 10).style.backgroundColor && document.getElementById(t).style.backgroundColor == document.getElementById(t + 10).style.backgroundColor) {
            return true
        } else if (smc == "botright" && document.getElementById(t).style.backgroundColor == document.getElementById(t - 10).style.backgroundColor && document.getElementById(t - 10).style.backgroundColor == document.getElementById(t - 20).style.backgroundColor) {
            return true
        } else if (smc == "topright" && document.getElementById(t).style.backgroundColor == document.getElementById(t + 8).style.backgroundColor && document.getElementById(t + 8).style.backgroundColor == document.getElementById(t + 16).style.backgroundColor) {
            return true
        } else if (smc == "midmid" && document.getElementById(t).style.backgroundColor == document.getElementById(t + 8).style.backgroundColor && document.getElementById(t).style.backgroundColor == document.getElementById(t - 8).style.backgroundColor) {
            return true
        } else if (smc == "botleft" && document.getElementById(t).style.backgroundColor == document.getElementById(t - 8).style.backgroundColor && document.getElementById(t - 8).style.backgroundColor == document.getElementById(t - 16).style.backgroundColor) {
            return true
        } else {
            return false
        }
    } else {
        return false //because the box is not colored
    }
}
function gameover() {
    if ((document.getElementById(11).style.backgroundColor == "purple" || document.getElementById(11).style.backgroundColor == "orange") && document.getElementById(11).style.backgroundColor == document.getElementById(14).style.backgroundColor && document.getElementById(14).style.backgroundColor == document.getElementById(17).style.backgroundColor) {
        return true
    } else if ((document.getElementById(38).style.backgroundColor == "purple" || document.getElementById(38).style.backgroundColor == "orange") && document.getElementById(38).style.backgroundColor == document.getElementById(41).style.backgroundColor && document.getElementById(41).style.backgroundColor == document.getElementById(44).style.backgroundColor) {
        return true
    } else if ((document.getElementById(65).style.backgroundColor == "purple" || document.getElementById(65).style.backgroundColor == "orange") && document.getElementById(65).style.backgroundColor == document.getElementById(68).style.backgroundColor && document.getElementById(68).style.backgroundColor == document.getElementById(71).style.backgroundColor) {
        return true
    } else if ((document.getElementById(11).style.backgroundColor == "purple" || document.getElementById(11).style.backgroundColor == "orange") && document.getElementById(11).style.backgroundColor == document.getElementById(38).style.backgroundColor && document.getElementById(38).style.backgroundColor == document.getElementById(65).style.backgroundColor) {
        return true
    } else if ((document.getElementById(14).style.backgroundColor == "purple" || document.getElementById(14).style.backgroundColor == "orange") && document.getElementById(14).style.backgroundColor == document.getElementById(41).style.backgroundColor && document.getElementById(41).style.backgroundColor == document.getElementById(68).style.backgroundColor) {
        return true
    } else if ((document.getElementById(17).style.backgroundColor == "purple" || document.getElementById(17).style.backgroundColor == "orange") && document.getElementById(17).style.backgroundColor == document.getElementById(44).style.backgroundColor && document.getElementById(44).style.backgroundColor == document.getElementById(71).style.backgroundColor) {
        return true
    } else if ((document.getElementById(11).style.backgroundColor == "purple" || document.getElementById(11).style.backgroundColor == "orange") && document.getElementById(11).style.backgroundColor == document.getElementById(41).style.backgroundColor && document.getElementById(41).style.backgroundColor == document.getElementById(71).style.backgroundColor) {
        return true
    } else if ((document.getElementById(17).style.backgroundColor == "purple" || document.getElementById(17).style.backgroundColor == "orange") && document.getElementById(17).style.backgroundColor == document.getElementById(41).style.backgroundColor && document.getElementById(41).style.backgroundColor == document.getElementById(65).style.backgroundColor) {
        return true
    } else {
        return false
    }
}
function moveable(t) {
    var yes = false;
    for (p = 1; p < 82; p++) {
        var smcp = document.getElementById(p).className.substring(0, document.getElementById(p).className.indexOf(" "));
        smcp = smcp.trim();
        if (document.getElementById(p).style.backgroundColor == "green" && smcp == boxrestrict(t)) {
            yes = true;
        }
    }
    if (yes == true) {
        return true
    } else {
        return false
    }
}
function myLoop() {
    setTimeout(function () {
        if (document.getElementById("bluebot").checked == true && turn % 2 == 0) {
            botai();
        };

        if (document.getElementById("redbot").checked == true && turn % 2 == 1) {
            botai();
        };
        if (over == false) {
            myLoop();
        }

    }, 1000)
}
myLoop();
function botai() {
    rand = Math.floor(Math.random() * 80) + 1;
    if (document.getElementById(rand).style.backgroundColor == "green") {
        document.getElementById(rand).click();
    } else {
        botai();
    }
}
