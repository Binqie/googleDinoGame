import checkForGameOver from './checkforgameover';
import createCactus from './createcactus';
import getRandomInterval from './getrandominterval';

export default function spawnCactuses() {
    let time = getRandomInterval()
    let id = setTimeout(() => {
        if (checkForGameOver()) return false;
        createCactus();
        time = getRandomInterval();
    }, time);
}
