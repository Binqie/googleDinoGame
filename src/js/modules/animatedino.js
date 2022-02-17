import checkForGameOver from "./checkforgameover";

const dino = document.querySelector('.dino');

export default function animateDino() {
    dino.classList.add('leftfoot');

    let id = setInterval(() => {
        dino.classList.toggle('leftfoot');
        dino.classList.toggle('rightfoot');
    }, 200)
}