export default class AnimeCard {
    constructor(id,name, strength, agility, intelligence, imgUrl){
        this.id = id
        this.name = name; 
        this.strength = strength; 
        this.agility  = agility; 
        this.intelligence = intelligence; 
        this.imgUrl = imgUrl;
    }
}

// classes are entities
// you makes classes where you find entities in a project
// variables in a class aka fields are attributes of that entity such as size, weight, etc
// methods are functions/ actions of that entity, such as speak, jump or getters and setters