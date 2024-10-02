window.onload = () => {
    const imgDiv = document.getElementById("images-div");
    const images = ["birthday", "Happy Birthday!", "clown", "Here's your clown!", "rain", "Good thing you grabbed your umbrella!", "read", "Is that a good book?", "shovel", "I love gardening!", "work", "Have you submitted your code?"]
    for (let i = 0; i < images.length; i += 2) {
        const newImg = document.createElement("img");
        newImg.src = "./images/" + images[i] + ".jpg";
        newImg.classList.add("person-img");
        newImg.onclick = () => {
            document.getElementById("details-title").innerHTML = images[i];
            document.getElementById("details-description").innerHTML = images[i+1];
        }
        imgDiv.append(newImg);
    }
}