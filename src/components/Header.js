import React from 'react'

export default class Header extends React.Component {

    render(){

        let headerStyle = {
            width: "100%",
            color: "red",
            backgrounColor: "blue"
        }


        return(
            <div style={headerStyle}>
                <p>This is my header</p>
            </div>
        )
    }
}