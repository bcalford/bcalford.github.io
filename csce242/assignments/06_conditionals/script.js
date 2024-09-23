/* Nav Section */

const toggleNav = () => {
    document.getElementById("main-nav-list").classList.toggle("navHidden");
};

const clickExerciseOne = () => {
    document.getElementById("slider-section").classList.remove("hidden");
    document.getElementById("chooser-section").classList.add("hidden");
}

const clickExerciseTwo = () => {
    document.getElementById("slider-section").classList.add("hidden");
    document.getElementById("chooser-section").classList.remove("hidden");
}

/* Slider Section */

const moveSlider = () => {
    const sliderValue = document.getElementById("slider").value;
    document.getElementById("slider-section").style.backgroundColor = "rgb(" + sliderValue + "," + 0 + "," + 0 + ")";
    if(sliderValue >= 0 && sliderValue < 60) {
        document.getElementById("slider-caption").innerHTML = "It's dark in here!";
    } else if(sliderValue >= 60 && sliderValue <= 200) {
        document.getElementById("slider-caption").innerHTML = "Now this I can work with.";
    } else if(sliderValue > 200 && sliderValue <= 255) {
        document.getElementById("slider-caption").innerHTML = "Too bright!";
    }
}

/* Chooser Section */

const changeImg = () => {
    $("button").on('click', function(x) {
        let buttonClicked = x.target.value;
      });
    if(buttonClicked == 1) {
        document.getElementById("chooser-img").src = "https://picsum.photos/50";
    } else if(buttonClicked == 2) {
        document.getElementById("chooser-img").src = "https://picsum.photos/150";
    } else if(buttonClicked == 3) {
        document.getElementById("chooser-img").src = "https://picsum.photos/300";
    } 
}

/* OnClicks */

window.onload = () => {
    document.getElementById("toggle-nav").onclick = toggleNav;
    document.getElementById("exercise1").onclick = clickExerciseOne;
    document.getElementById("exercise2").onclick = clickExerciseTwo;
    document.getElementById("slider").oninput = moveSlider;
    document.getElementById("button1").onclick = changeImg;
    document.getElementById("button2").onclick = changeImg;
    document.getElementById("button3").onclick = changeImg;
};
