import jump from "./jump";

export default function causeJump(e) {
    if (e.code === 'Space') jump(); 
}