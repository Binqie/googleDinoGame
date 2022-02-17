export default function getRandomCactus() {
    const width = Math.round(Math.random() * (50 - 30) + 30);0
    const num = Math.round(Math.random() * (4 - 1) + 1);
    return {width, num};
}