import { connect } from 'react-redux';
import { inputLeft, inputRight } from '../actions';
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
            dispatch(inputLeft(ownProps.person + "States"))
        },
        onRightSelect: () => {
            dispatch(inputRight(ownProps.person + "States"))
        }
    }
}

const DisplayPortContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DisplayPort)

export default DisplayPortContainer