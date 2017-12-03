import Game from './Game';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import * as GameStates from '../GameStates';

const mapStateToProps = state => {
    return {
        showStartButton: state.game.gameState === GameStates.PRE_GAME,
        showGamePanels: state.game.gameState === GameStates.MID_GAME
    }
}

const mapDispatchToProps = dispatch => {
    return {
        playerLeft: player => dispatch(actions.playerLeft()),
        playerRight: player => dispatch(actions.playerRight()),
        gameStart: () => dispatch(actions.gameStart())
    }
}

const GameContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Game)

export default GameContainer