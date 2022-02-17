import '@styles/styles';
import spawnCactuses from '@js/modules/spawncactuses';
import getRandomInterval from '@js/modules/getrandominterval';
import causeJump from '@js/modules/causeJump';
import animateDino from '@js/modules/animatedino';

function startGame() {
    document.addEventListener('keydown', causeJump);
    animateDino();

    setInterval(spawnCactuses, getRandomInterval(1200, 700));
}

startGame();