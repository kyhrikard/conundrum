import React, { Component } from 'react'

export default class Button extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div style={this.props.active ? styles.active : styles.notActive} onClick={this.handleClick}>
                Button {this.props.buttonId}
                <br/>
                <br/>
                Active: 
                {this.props.active ? ' true' : ' false'}
            </div>
        )
    }

    handleClick = () => {
        this.props.callBackFromParent(this)
    }
}

const styles = {
    notActive: {
        backgroundColor: 'pink',
        margin: '10px',
        padding: '10px'
    },
    active: {
        backgroundColor: 'yellow',
        margin: '10px',
        padding: '10px'
    }
}