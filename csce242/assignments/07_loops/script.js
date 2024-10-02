const drawStars = () => {
    const starCount = document.getElementById("stars-input");
    const userAlert = document.getElementById("alert");
    if(starCount.value <= 0) {
        userAlert.style.display = "inline";
        userAlert.innerHTML = "* Invalid Input";
        userAlert.style.color = "var(--color-6)";
    }
    else {
        userAlert.style.display = "none";
        userAlert.innerHTML = "";
        userAlert.style.color = "var(--color-1)";
        let starDiv = document.getElementById("star-area");
        const allStars = document.querySelectorAll("#star-area div");
        for(let i = 0; i < allStars.length; i++) {
            allStars[i].remove();
        }
        for(let i = 1; i <= starCount.value; i++) {
            const newStar = document.createElement("div");
            starDiv.append(newStar);
            newStar.style.color = "var(--color-6)";
            newStar.style.position = "absolute";
            newStar.style.cursor = "default"
            newStar.style.top = (Math.random() * 490) + "px";
            newStar.style.left = (Math.random() * 470) + "px";
            newStar.textContent = "*";
            newStar.onclick = () => {
                userAlert.innerHTML = "This is star number " + i + "!";
                userAlert.style.display = "inline";
            }
        }
    }
};

window.onload = () => {
    document.getElementById("stars-submit").onclick = drawStars;
};