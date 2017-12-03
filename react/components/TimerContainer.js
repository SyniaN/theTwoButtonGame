import { connect } from 'react-redux';
import Timer from './Timer';

function mapStateToProps(state) {
    return {
        timeString: Math.floor(state.game.time / 60) + ":" + (state.game.time % 60 < 9 ? "0" + state.game.time % 60 : state.game.time % 60)
    };
}

const TimerContainer = connect(
    mapStateToProps,
)(Timer);

export default TimerContainer;