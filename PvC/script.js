import AnimeCard from "./deck.js";
const naruto = new AnimeCard(
    "Naruto Uzumaki", 
    69, 
    70,
    25,
    "../images/naruto.jpg"
)


let deckOfCards = {
    naruto
}
console.log(naruto)
console.log("Hello")
console.log(deckOfCards.naruto.imgUrl)
let name = document.getElementById("name");
name.innerText = naruto.name