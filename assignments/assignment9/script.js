window.onload = () => {
    const water = document.querySelector(".water");
    for(let i = 0;  i < 20; i++){
        setTimeout(() => {
            const bubble = document.createElement("div");
            bubble.classList.add("bubble");
            bubble.style.left = Math.random() * 350 + "px";
            water.appendChild(bubble);
        }, 
        i * 600);
    }
    
};