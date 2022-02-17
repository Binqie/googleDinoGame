import causeJump from "./causeJump";
const dino = document.querySelector('.dino');

export default function jump() {
    document.removeEventListener('keydown', causeJump);

    dino.classList.add('animated');
    setTimeout(() => {
        dino.classList.remove('animated');

        document.addEventListener('keydown', causeJump);

    }, 600);
}