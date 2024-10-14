/* Index List Function */

let headerClicked = 0;
let para1 = document.getElementById("article1-p");
let para2 = document.getElementById("article2-p");
let para3 = document.getElementById("article3-p");
let para4 = document.getElementById("article4-p");
const indexSwitchOpened = () => {
    if(headerClicked === 1) {
        document.getElementById("article1-p").style.display = "block";
        document.getElementById("article2-p").style.display = "none";
        document.getElementById("article3-p").style.display = "none";
        document.getElementById("article4-p").style.display = "none";
    }
    if(headerClicked === 2) {
        document.getElementById("article1-p").style.display = "none";
        document.getElementById("article2-p").style.display = "block";
        document.getElementById("article3-p").style.display = "none";
        document.getElementById("article4-p").style.display = "none";
    }
    if(headerClicked === 3) {
        document.getElementById("article1-p").style.display = "none";
        document.getElementById("article2-p").style.display = "none";
        document.getElementById("article3-p").style.display = "block";
        document.getElementById("article4-p").style.display = "none";
    }
    if(headerClicked === 4) {
        document.getElementById("article1-p").style.display = "none";
        document.getElementById("article2-p").style.display = "none";
        document.getElementById("article3-p").style.display = "none";
        document.getElementById("article4-p").style.display = "block";
    }
}

/* OnLoads */

window.onload = () => {
    /* For Index List Function */
    document.getElementById("article1-h2").addEventListener("click", function() {
        headerClicked = 1;
    });
    document.getElementById("article1-h2").onclick = indexSwitchOpened;
    document.getElementById("article2-h2").addEventListener("click", function() {
        headerClicked = 2;
    });
    document.getElementById("article2-h2").onclick = indexSwitchOpened;
    document.getElementById("article3-h2").addEventListener("click", function() {
        headerClicked = 3;
    });
    document.getElementById("article3-h2").onclick = indexSwitchOpened;
    document.getElementById("article4-h2").addEventListener("click", function() {
        headerClicked = 4;
    });
    document.getElementById("article4-h2").onclick = indexSwitchOpened;
}