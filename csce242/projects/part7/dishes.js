const getDishes = async() => {
    try {
        return (await fetch("https://bcalford.github.io/csce242/projects/part6/dishes.json")).json();
    } catch(error) {
        console.log(error);
    }
}

const showDishes = async() => {
    const dishes = await getDishes();

    dishes.forEach((dish)=>{
        const article = document.createElement("article");
        article.classList.add("dish");
        document.getElementById("meals-list").append(article);

        const link = document.createElement("a");
        link.href = dish.link;
        article.append(link);

        const title = document.createElement("h2");
        title.innerHTML = dish.name;
        link.append(title);

        const line = document.createElement("hr");
        article.append(line);

        const innerDiv = document.createElement("div");
        innerDiv.classList.add("dish-content");
        article.append(innerDiv);

        const image = document.createElement("img");
        image.src = "./images/" + dish.image1;
        innerDiv.append(image);

        const p1 = document.createElement("p");
        p1.innerHTML = dish.description1;
        innerDiv.append(p1);

        const p2 = document.createElement("p");
        p2.innerHTML = dish.description2;
        innerDiv.append(p2);
    });
}

showDishes();