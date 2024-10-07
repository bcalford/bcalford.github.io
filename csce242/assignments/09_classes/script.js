class Pizza {
    constructor(name, place, year, toppings, stars, picture) {
        this.name = name;
        this.place = place;
        this.year = year;
        this.toppings = toppings;
        this.stars = stars;
        this.picture = picture;
    }

    get section() {
        const pizzaSection = document.createElement("section");
        pizzaSection.classList.add("pizza");
        const heading = document.createElement("h3");
        heading.innerText = this.name;
        pizzaSection.appendChild(heading);
        pizzaSection.appendChild(this.imageFile(this.picture));
        pizzaSection.onclick = () => {
            document.getElementById("modal-container").style.display="inline";
            document.getElementById("modal-content").appendChild(this.expandedSection);
        };
        document.getElementById("close-button").onclick = () => {
            document.getElementById('modal-container').style.display='none';
            document.getElementById("modal-content").removeChild(document.getElementById("modal-content").lastElementChild);
        }
        return pizzaSection;
    }

    get expandedSection() {
        const expandedPizzaSection = document.createElement("section");
        expandedPizzaSection.classList.add("expandedPizza");
        const heading = document.createElement("h3");
        heading.innerText = this.name;
        expandedPizzaSection.appendChild(heading);
        const infoList = document.createElement("ul");
        expandedPizzaSection.appendChild(infoList);
        infoList.append(this.listItem(`Location: ${this.place}`));
        infoList.append(this.listItem(`Time: ${this.year}`));
        infoList.append(this.listItem(`Traditional Toppings: ${this.toppings}`));
        infoList.append(this.listItem(`Rating: ${this.stars}`));
        expandedPizzaSection.appendChild(this.imageFile(this.picture));
        return expandedPizzaSection;
    }

    listItem(info) {
        const item = document.createElement("li");
        item.innerText = info;
        return item;
    }

    imageFile(image) {
        const imageItem = document.createElement("img");
        imageItem.src = "images/" + image;
        return imageItem;
    }
}

window.onload = () => {
    let pizzas = [];
    let pizzaList = document.getElementById("pizza-list");
    pizzas.push(new Pizza("Neapolitan Style", "Naples, Italy", "16-18th Century", "Tomatoes, Mozzarella, Basil, Extra Virgin Olive Oil", "4.5 Stars", "neapolitan.jpg"));
    pizzas.push(new Pizza("Chicago Style", "Chicago, USA", "1943", "Mozzarella, Ground Beef, Sausage, Pepperoni, Veggies, Parmesan Cheese", "3 Stars", "chicago.jpg"));
    pizzas.push(new Pizza("New York Style", "New York, USA", "1905", "Mozzarella, Pepperoni, Sausage, Mushrooms, Anchovies, Red Pepper Flakes, Parmesan Cheese", "5 Stars", "newyork.jpg"));
    pizzas.push(new Pizza("Sicilian Style", "Sicily, Italy", "19th Century", "Tomato, Onion, Anchovies, Herbs", "3.5 Stars", "sicilian.jpg"));
    for (let i in pizzas) {
        pizzaList.append(pizzas[i].section);
    }
}