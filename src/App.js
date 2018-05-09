import React, { Component } from 'react'
import Sidenav from './Sidenav'
import Expandingnav from './Expandingnav'

export default class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      isHidden: true,
      dataFromChild: null
    }
  }
  render() {
    return (
      <div style={styles}>
        <Sidenav callbackFromParent={this.dataFromChild}/>
        {!this.state.isHidden && <Expandingnav dataFromApp={this.state.dataFromChild} />}
      </div>
    );
  }

  dataFromChild = (data) => {
    if(data.active){
      this.setState({
        isHidden: false,
        dataFromChild: data.buttonId 
      })
    }
    else {
      this.setState({
        isHidden: true
      })
    }
  }
}

const styles = {
  display: 'flex'
}


