import * as ActionTypes from '../ActionTypes';

export const inputLeft = (playerType) => {
    return {
        type: ActionTypes.LEFT,
        playerType
    }
}

export const inputRight = (playerType) => {
    return {
        type: ActionTypes.RIGHT,
        playerType
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
