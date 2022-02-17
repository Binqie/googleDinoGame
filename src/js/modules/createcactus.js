import getRandomCactus from './getrandomcactus';
import checkForGameOver from './checkforgameover';
const gameWindow = document.querySelector('.game-window');
const dino = document.querySelector('.dino');
const currentScore = document.querySelector('.current-score span');
let score = 0;

export default function createCactus() {
    const props = getRandomCactus();
    
    const cactus = document.createElement('div');
    cactus.style.width = props.width + 'px'; 
    cactus.style.height = props.width + 'px';
    cactus.style.right = '-100px';
    cactus.classList.add('cactus', `cactus${props.num}`);

    gameWindow.append(cactus);
    let id = setInterval(() => {

        if (dino.getBoundingClientRect().right >= cactus.getBoundingClientRect().left && dino.getBoundingClientRect().bottom >= cactus.getBoundingClientRect().top && dino.getBoundingClientRect().left <= cactus.getBoundingClientRect().right) {
            gameWindow.setAttribute('data-game-over', 'true');
        }

        if (checkForGameOver()) clearInterval(id);

        if (cactus.getBoundingClientRect().right <= gameWindow.getBoundingClientRect().left) {
            cactus.remove();
            currentScore.innerHTML = Math.round(++score / 10);
        }

        cactus.style.right = parseInt(cactus.style.right) + 5 + 'px';
    }, 7)
}
