let happySongs = {"Touch the Sky - Kanye West": "https://www.youtube.com/watch?v=B95OUKk7alM", "DOGTOOTH - Tyler, The Creator": "https://www.youtube.com/watch?v=QdkbuXIJHfk", "Good Vibrations - The Beach Boys": "https://www.youtube.com/watch?v=rQ-UFKxDq5o", "MIA (ft. Drake) - Bad Bunny": "https://www.youtube.com/watch?v=OSUxrSe5GbI", "PLAYA - A$AP Rocky": "https://www.youtube.com/watch?v=BxJJZyV-jXg"};
let sadSongs = {"Love Of My Life - Queen": "https://www.youtube.com/watch?v=lTr6dyjajKc", "Lover, You Should've Come Over - Jeff Buckley": "https://www.youtube.com/watch?v=HxfE6PJmGS8", "White Feather Hawk Tail Deer Hunter - Lana Del Rey": "https://www.youtube.com/watch?v=qFTnDn4t-Ps", "Lonely At The Top (Bonus) - J. Cole": "https://www.youtube.com/watch?v=2z6KfDIULcM", "SKINNY - Billie Eilish": "https://www.youtube.com/watch?v=g6YSdMnCOCU"};
let moodSelect = document.getElementById("mood");
let songsDiv = document.getElementById("songs");
let videoDiv = document.getElementById("video");

moodSelect.addEventListener("change", function () {
    songsDiv.innerHTML = "";
    videoDiv.innerHTML = "";
    let songs = {};
    if (moodSelect.value === "happy") {
        songs = happySongs;
    } else if (moodSelect.value === "sad") {
        songs = sadSongs;
    } else {
        return;
    }

    for (let song in songs) {
        let p = document.createElement("p");
        p.classList.add("songs")
        let link = document.createElement("a");
        link.classList.add("songLink")
        link.textContent = song;
        link.onclick = function () {
            showVideo(songs[song]);
        };
        p.appendChild(link);
        songsDiv.appendChild(p);
    }
});

function showVideo(url) {
    videoDiv.innerHTML = `<iframe width="560" height="315" src="${url}" frameborder="0" allowfullscreen> </iframe>`;
}