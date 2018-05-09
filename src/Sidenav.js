import React, { Component } from 'react'
import Button from './Button'

export default class Sidenav extends Component {
    constructor(props){
        super(props)

        this.state = {
            buttons: [
                {
                    buttonId: 1,
                    active: false
                },
                {
                    buttonId: 2,
                    active: false
                },
                {
                    buttonId: 3,
                    active: false
                },
                {
                    buttonId: 4,
                    active: false
                },
                {
                    buttonId: 5,
                    active: false
                },
                {
                    buttonId: 77,
                    active: false
                }
            ]
        }
    }
    render() {
        const buttonsArray = []
        this.state.buttons.map(button => {
            buttonsArray.push(
                <Button 
                    key={button.buttonId} 
                    buttonId={button.buttonId} 
                    callBackFromParent={this.handleClickFromChild}
                    active={button.active}
                />
            )
        })
        return (
            <div style={styles.wrapper}>
                {buttonsArray}
            </div>
        )
    }

    handleClickFromChild = (button) => {
        const buttonsArray = this.state.buttons.slice()
        buttonsArray.map(b => {
            if(button.props.buttonId === b.buttonId) {
                if(button.props.active)
                    b.active = false
                else
                    b.active = true
                this.props.callbackFromParent(b)
            }
            else
                b.active = false
        })
        this.setState({
            buttons: buttonsArray
        })
    }
}

const styles = {
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'teal',
        padding: '5rem',
        height: '100vh'
    }      
}