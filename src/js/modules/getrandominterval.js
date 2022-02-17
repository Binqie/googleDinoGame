export default function getRandomInterval(max, min) {
    return Math.round(Math.random() * (max - min) + min);
}