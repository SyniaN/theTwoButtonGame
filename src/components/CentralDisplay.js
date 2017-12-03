import React from 'react'
import * as Shapes from './Shapes'

export default class CentralDisplay extends React.Component {

    render() {

        let shapeToDisplay = <Shapes.Square />;

        switch (this.props.item) {
            case "Square":
                shapeToDisplay = <Shapes.Square />
                break;
            case "Circle":
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