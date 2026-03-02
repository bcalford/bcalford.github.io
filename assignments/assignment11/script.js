class Song {
	constructor(title, artist, album, year, genre, image, youtube) {
		this.title = title;
		this.artist = artist;
		this.album = album;
		this.year = year;
		this.genre = genre;
		this.image = image;
		this.youtube = youtube;
	}
	getCard() {
		let div = document.createElement("div");
		div.className = "card";
		div.innerHTML = `<h3>${this.title}</h3> <p>By ${this.artist}</p> <img src="images/${this.image}">`;
		div.onclick = () => this.showModal();
		return div;
	}


	showModal() {
		document.getElementById("mTitle").innerText = this.title;
		document.getElementById("mArtist").innerText = "By " + this.artist;
		document.getElementById("mAlbum").innerText = this.album;
		document.getElementById("mYear").innerText = this.year;
		document.getElementById("mGenre").innerText = this.genre;
		document.getElementById("mVideo").src ="https://www.youtube.com/embed/" + this.youtube;
		document.getElementById("modal").style.display = "block";
	}
}

function closeModal() {
	document.getElementById("modal").style.display = "none";
	document.getElementById("mVideo").src = "";
}
let songs = [
	new Song(
		"Devil in a New Dress",
		"Kanye West",
		"My Beautiful Dark Twisted Fantasy",
		2010,
		"Hip Hop",
		"mbdtf.jpg",
		"sk3rpYkiHe8?si=Z8TXyZakqqLM7Fk6"
	),
	new Song(
		"WILSHIRE",
		"Tyler, The Creator",
		"CALL ME IF YOU GET LOST",
		2021,
		"Hip Hop",
		"cmiygl.jpg",
		"LxGVyJLjbiY?si=_4_1nYOfUIiy6hzi"
	),
	new Song(
		"I Will",
		"The Beatles",
		"The Beatles (White Album)",
		1968,
		"Rock",
		"white.jpg",
		"p-abNGP1BK4?si=13FK7bLXRjg7Wndt"
	),
	new Song(
		"PLAYA",
		"A$AP Rocky",
		"LIVE.LOVE.A$AP",
		2011,
		"Hip Hop",
		"dbd.png",
		"BxJJZyV-jXg?si=6nYla_ca0Pxm_fTy"
	)
];
let container = document.getElementById("songs");

for (let i = 0; i < songs.length; i++) {
	container.appendChild(songs[i].getCard());
}