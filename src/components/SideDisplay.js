import React from 'react'

export default class SideDisplay extends React.Component {
    render(){
        return <div>
                    {this.props.item}
                </div>
    }
}