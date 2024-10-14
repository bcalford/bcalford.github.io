const getIceCreams = async() => {
    try {
        return (await fetch("https://portiaportia.github.io/json/ice-creams.json")).json();
    } catch(error) {
        console.log(error);
    }
}

const showIceCreams = async() => {
    const iceCreams = await getIceCreams();

    iceCreams.forEach((iceCream)=>{
        // Creates the ice cream section.
        const section = document.createElement("section");
        section.classList.add("icecream");
        document.getElementById("icecream-list").append(section);

        // Creates the ice cream section image.
        const image = document.createElement("img");
        image.src = "https://portiaportia.github.io/json/images/ice-creams/" + iceCream.image;
        image.classList.add("icecream-img");
        section.append(image);

        // Creates the ice cream section name.
        const paragraph = document.createElement("p");
        paragraph.innerHTML = iceCream.name;
        paragraph.classList.add("icecream-p");
        section.append(paragraph);

        // Show and hide ice cream section name.
        section.onmouseover = () => {
            paragraph.style.display = "block";
        }
        section.onmouseout = () => {
            paragraph.style.display = "none";
        }
        
    });
}

showIceCreams();