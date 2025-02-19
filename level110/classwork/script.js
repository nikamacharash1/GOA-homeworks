class Animal {
    constructor(name, species, description) {
        this.name = name;
        this.species = species;
        this.description = description;
    }

    getDetails() {
        return `<h2>${this.name}</h2>
                <p><strong>Species:</strong> ${this.species}</p>
                <p><strong>Description:</strong> ${this.description}</p>`;
    }
}

const lion = new Animal("Lion", "goa", "Lions are large, powerful and strong");
const elephant = new Animal("Elephant", "telavi", "Elephants are the largest animals");
const eagle = new Animal("Eagle", "sachxere", "Eagles are large birds");
const snake = new Animal("Snake", "kcdimdi", "Snakes are snakes");
const crocodile = new Animal("Crocodile", "water", "Crocodiles are large, predatory reptiles.");


const mammals = [lion, elephant];
const birds = [eagle];
const reptiles = [snake, crocodile];

function showCategory(category) {
    let animals = [];
    if (category === 'mammals') {
        animals = mammals;
    } else if (category === 'birds') {
        animals = birds;
    } else if (category === 'reptiles') {
        animals = reptiles;
    }

    displayAnimals(animals);
}

function displayAnimals(animals) {
    const animalsListDiv = document.getElementById('animals-list');
    animalsListDiv.innerHTML = '';

    animals.forEach(animal => {
        const animalCard = document.createElement('div');
        animalCard.classList.add('animal-card');
        animalCard.innerHTML = `
            <h3>${animal.name}</h3>
            <p>${animal.species}</p>
        `;
        animalCard.onclick = () => showAnimalDetails(animal);
        animalsListDiv.appendChild(animalCard);
    });
}

function showAnimalDetails(animal) {
    const animalDetailsDiv = document.getElementById('animal-details');
    animalDetailsDiv.innerHTML = animal.getDetails();
}

showCategory('mammals');
