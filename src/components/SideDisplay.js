import React from 'react';
import * as Shapes from './Shapes';
import * as ShapeTypes from '../ShapeTypes';

export default class SideDisplay extends React.Component {

    render() {

        let shapeToDisplay = <Shapes.Square />;

        switch (this.props.item) {
            case ShapeTypes.SQUARE:
                shapeToDisplay = <Shapes.Square />
                break;
            case ShapeTypes.CIRCLE:
                shapeToDisplay = <Shapes.Circle />
                break;
            default:
                shapeToDisplay = this.props.item
        }

        return <div>
            {shapeToDisplay}
        </div>
    }
}