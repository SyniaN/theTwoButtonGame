import {connect} from 'react-redux';
import {inputLeft, inputRight} from '../actions';
import DisplayPort from './DisplayPort';

const mapStateToProps = state => {
    return {
        leftItem: state.input.playerStates.left,
        centralItem: state.input.playerStates.current,
        rightItem: state.input.playerStates.right
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLeftSelect: () => {
            dispatch(inputLeft())
        },
        onRightSelect: () => {
            dispatch(inputRight())
        }
    }
}

const DisplayPortContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DisplayPort)

export default DisplayPortContainer