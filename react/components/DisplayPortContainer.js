import { connect } from 'react-redux';
import { playerLeft, playerRight } from '../actions';
import DisplayPort from './DisplayPort';

const mapStateToProps = (state, ownProps) => {
    return {
        leftItem: state.game[ownProps.person + "States"].left,
        centralItem: state.game[ownProps.person + "States"].current,
        rightItem: state.game[ownProps.person + "States"].right,
        tabIndex: ownProps.person === "player" ? "1" : "2"
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLeftSelect: () => {
            dispatch(playerLeft(ownProps.person + "States"))
        },
        onRightSelect: () => {
            dispatch(playerRight(ownProps.person + "States"))
        }
    }
}

const DisplayPortContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DisplayPort)

export default DisplayPortContainer