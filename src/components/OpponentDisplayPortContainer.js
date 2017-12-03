import { connect } from 'react-redux';
import { opponentLeft, opponentRight } from '../actions';
import DisplayPort from './DisplayPort';

const mapStateToProps = (state, ownProps) => {
    return {
        leftItem: state.game.opponentStates.left,
        centralItem: state.game.opponentStates.current,
        rightItem: state.game.opponentStates.right,
        tabIndex: "2"
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLeftSelect: () => {
            dispatch(opponentLeft())
        },
        onRightSelect: () => {
            dispatch(opponentRight())
        }
    }
}

const DisplayPortContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DisplayPort)

export default DisplayPortContainer