const modalCardsImages = {
    "spiderMan" : {
        "card-1-src": "./Assets/spiderman.png",
        "card-2-src": "./Assets/spiderman-2.png",
        "card-3-src": "./Assets/spiderman-3.png",
    },
    "robin" : {
        "card-1-src": "./Assets/robin.png",
        "card-2-src": "./Assets/robin-2.png",
        "card-3-src": "./Assets/robin-3.png",
    },
    "batman" : {
        "card-1-src": "./Assets/batman.webp",
        "card-2-src": "./Assets/batman-2.png",
        "card-3-src": "./Assets/batman-3.png",
    }

}

const loadModalImage = (option) => {
    const cardImage1 = document.getElementById("card-image-1");
    const cardImage2 = document.getElementById("card-image-2");
    const cardImage3 = document.getElementById("card-image-3");   
    cardImage1.src = modalCardsImages[option]["card-1-src"];
    cardImage2.src = modalCardsImages[option]["card-2-src"];
    cardImage3.src = modalCardsImages[option]["card-3-src"];
}

const openModal = (option) => () => {
    modal.classList.remove('hidden');
    modal.classList.add('visible');
    loadModalImage(option);
}


const modal = document.querySelector('.modal');
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const closeButton = document.querySelector('.modal__content--close');

button1.addEventListener('click', openModal("spiderMan"));
button2.addEventListener('click', openModal("robin"));
button3.addEventListener('click', openModal("batman"));

closeButton.addEventListener('click', () => {
    modal.classList.remove('visible');
    modal.classList.add('hidden');
})