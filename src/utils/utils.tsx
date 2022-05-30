
import { BASE_UNIT_HEIGHT, BASE_UNIT_WIDTH, } from "./constants"
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../styles/index';

export function normalizeFont(size: number, uncontrolled = false) {
    const fontSize = (SCREEN_HEIGHT / BASE_UNIT_HEIGHT) * size;
    if (uncontrolled) {
        return fontSize;
    } else {
        return fontSize > 20 ? 20 : fontSize;
    }
}

export function normalizeX(size: number) {
    return Math.round((SCREEN_WIDTH / BASE_UNIT_WIDTH) * size);
}

export function normalizeY(size: number) {
    return Math.round((SCREEN_HEIGHT / BASE_UNIT_HEIGHT) * size);
}
