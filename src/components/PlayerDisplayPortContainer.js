import { connect } from 'react-redux';
import { playerLeft, playerRight } from '../actions';
import DisplayPort from './DisplayPort';

const mapStateToProps = (state, ownProps) => {
    return {
        leftItem: state.game.playerStates.left,
        centralItem: state.game.playerStates.current,
        rightItem: state.game.playerStates.right,
        tabIndex: "1"
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLeftSelect: () => {
            dispatch(playerLeft())
        },
        onRightSelect: () => {
            dispatch(playerRight())
        }
    }
}

const DisplayPortContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DisplayPort)

export default DisplayPortContainer