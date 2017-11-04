import Game from './Game';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        inputLeft: player => dispatch(actions.inputLeft(player)),
        inputRight: player => dispatch(actions.inputRight(player))
    }
}

const GameContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Game)

export default GameContainer