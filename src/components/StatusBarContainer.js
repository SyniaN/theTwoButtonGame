import { connect } from 'react-redux';
import StatusBar from './StatusBar';

function mapStateToProps(state) {
    return {
        playerScore: state.game.playerStates.score,
        opponentScore: state.game.opponentStates.score
    };
}

export default connect(
    mapStateToProps,
)(StatusBar);