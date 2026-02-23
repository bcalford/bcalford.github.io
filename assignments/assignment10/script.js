let happySongs = {"Touch the Sky - Kanye West": "https://www.youtube.com/embed/B95OUKk7alM?si=LrK8AWeHbUKIEtdj", "DOGTOOTH - Tyler, The Creator": "https://www.youtube.com/embed/QdkbuXIJHfk?si=vyoop5bZgITgFq36", "Good Vibrations - The Beach Boys": "https://www.youtube.com/embed/rQ-UFKxDq5o?si=uG3m8x8eMpdtOqDE", "MIA (ft. Drake) - Bad Bunny": "https://www.youtube.com/embed/OSUxrSe5GbI?si=irQJ06Hs2dsp3yPO", "PLAYA - A$AP Rocky": "https://www.youtube.com/embed/BxJJZyV-jXg?si=5kAmuqn8gWOS1IPU"};
let sadSongs = {"Love Of My Life - Queen": "https://www.youtube.com/embed/lTr6dyjajKc?si=sPKTkmbXNCdk2wkK", "Lover, You Should've Come Over - Jeff Buckley": "https://www.youtube.com/embed/HxfE6PJmGS8?si=ZTMe3d_QOJ8Nh0AV", "White Feather Hawk Tail Deer Hunter - Lana Del Rey": "https://www.youtube.com/embed/qFTnDn4t-Ps?si=kGjW2R48HP7HeGIJ", "Lonely At The Top (Bonus) - J. Cole": "https://www.youtube.com/embed/2z6KfDIULcM?si=4ic3oihw5n-BZAJR", "SKINNY - Billie Eilish": "https://www.youtube.com/embed/g6YSdMnCOCU?si=FzzffzoOi189uBsO"};
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