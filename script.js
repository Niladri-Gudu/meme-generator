const container = document.getElementById("container");
const image = document.getElementById("img");

async function generate() {
    const response = await fetch('https://meme-api.com/gimme');
    const json = await response.json();
    console.log(json);
    const image = document.createElement("img");
    image.classList.add('img');
    image.src = json.url;
    container.innerHTML = "";
    container.appendChild(image);
}