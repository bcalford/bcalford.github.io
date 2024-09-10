myButton.onclick = () => {
    document.getElementById("message").innerHTML = "Goodbye Everyone";
    document.getElementById("stuff").classList.remove("special");
}

myButton.onclick = () => {
    document.getElementById("column").style.display("none");
}

myButton.onclick = () => {
    document.getElementById("stuff").animate.apply("rotate(360deg)");
}

myButton.onclick = () => {
    document.getElementById("stuff").animate.remove("rotate(360deg)");
}