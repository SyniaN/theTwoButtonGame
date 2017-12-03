import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger';

import appReducer from './reducers/appReducer';
import App from './components/App';
import * as Actions from './actions/index';
import * as GameStates from './GameStates'
import registerServiceWorker from './registerServiceWorker';


const initialState = {
    game: {
        gameState: GameStates.PRE_GAME,
        time: 30,
        playerStates: {
            name: "David",
            rank: "1",
            stars: "2",
            left: undefined,
            right: undefined,
            current: undefined,
            score: 0
        },
        opponentStates: {
            name: "Bot",
            rank: "1",
            left: undefined,
            right: undefined,
            current: undefined,
            score: 0
        }
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(appReducer, initialState, composeEnhancers(
    applyMiddleware(logger)
));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

let prevGameState = GameStates.PRE_GAME;
let myInterval;
const timerLogic = () => {
    let currentGameState = store.getState().game.gameState;
    if (prevGameState === GameStates.PRE_GAME && currentGameState === GameStates.MID_GAME) {
        myInterval = setInterval(() => {
            if (store.getState().game.time > 0) {
                store.dispatch(Actions.decrementTimer());
            } else {
                store.dispatch(Actions.gameStop());
            }
        }, 1000);
    } else if (prevGameState === GameStates.MID_GAME && currentGameState === GameStates.POST_GAME) {
        clearInterval(myInterval);
    }
    prevGameState = currentGameState;
}

let actionPlanned = false;
const AI = () => {
    let current;
    let left;
    if (store.getState().game.gameState === GameStates.MID_GAME) {
        console.log('setting current');
        current = store.getState().game.opponentStates.current;
        left = store.getState().game.opponentStates.left;
    } else {
        current = undefined;
        left = undefined;
    }

    if (current && !actionPlanned) {
        const randomTime = Math.floor(Math.random()) * 1000 + 300
        actionPlanned = true;
        setTimeout(() => {
            if (current === left) {
                store.dispatch(Actions.opponentLeft());
            } else {
                store.dispatch(Actions.opponentRight());
            }
            actionPlanned = false;
        }, randomTime)
    }
}

store.subscribe(timerLogic);
store.subscribe(AI);

registerServiceWorker();
