import * as ActionTypes from '../ActionTypes';
import generateShape from '../controller/shapeGenerator';

export const playerLeft = () => {
    return {
        type: ActionTypes.PLAYER_LEFT,
        nextItem: generateShape()
    }
}

export const playerRight = () => {
    return {
        type: ActionTypes.PLAYER_RIGHT,
        nextItem: generateShape()
    }
}

export const opponentLeft = () => {
    return {
        type: ActionTypes.OPPONENT_LEFT,
        nextItem: generateShape();
    }
}

export const opponentRight = () => {
    return (getState, dispatch) => {
        return {
            type: ActionTypes.OPPONENT_RIGHT,
            nextItem: generateShape();
        }
    }
}

export const incrementTimer = () => {
    return {
        type: ActionTypes.INC_TIMER
    }
}

export const decrementTimer = () => {
    return {
        type: ActionTypes.DEC_TIMER
    }
}

export const resetTimer = () => {
    return {
        type: ActionTypes.RESET_TIMER
    }
}

export const gameStart = () => {
    return {
        type: ActionTypes.GAME_START
    }
}

export const gameStop = () => {
    return {
        type: ActionTypes.GAME_STOP
    }
}

export const gameReset = () => {
    return {
        type: ActionTypes.GAME_RESET
    }
}
