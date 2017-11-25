import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

import appReducer from './reducers/appReducer';
import App from './components/App';
import * as Actions from './actions/index';
import * as GameStates from './GameStates'
import registerServiceWorker from './registerServiceWorker';


const initialState = {
    game: {
        gameState: GameStates.PRE_GAME,
        time: 120,
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

let store = createStore(appReducer, initialState, applyMiddleware(logger));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

let prevGameState = GameStates.PRE_GAME;
let myTimeOut;
const timerLogic = () => {
    let currentGameState = store.getState().game.gameState;
    if (prevGameState === GameStates.PRE_GAME && currentGameState === GameStates.MID_GAME) {
        myTimeOut = setTimeout(() => {
            if (store.getState().game.time > 0) {
                store.dispatch(Actions.decrementTimer());
            } else {
                store.dispatch(Actions.gameStop());
            }
        }, 1000);
    } else if (prevGameState === GameStates.MID_GAME && currentGameState === GameStates.POST_GAME) {
        clearTimeout(myTimeOut);
    }
}

store.subscribe(timerLogic)

registerServiceWorker();
