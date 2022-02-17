export default function checkForGameOver() {
    return document.querySelector('.game-window').getAttribute('data-game-over') === 'true';
}