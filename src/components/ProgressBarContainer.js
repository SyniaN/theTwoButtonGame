import {connect} from 'react-redux';
import ProgressBar from './ProgressBar';

const mapStateToProps = (state, ownProps) => {
    return {
        score: state.input[ownProps.person + "States"].score
    }
}

const ProgressBarContainer = connect(
    mapStateToProps
)(ProgressBar)

export default ProgressBarContainer;