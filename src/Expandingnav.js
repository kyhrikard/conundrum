import React, { Component } from 'react'

export default class Expandingnav extends Component {
    render() {
        return (
            <div style={styles}>
                <h3>
                    Expandingnav
                </h3>
                <p>
                    Opened by button with id: {this.props.dataFromApp}
                </p>
            </div>
        )
    }
}

const styles = {
    backgroundColor: 'grey',
    padding: '5rem'
}