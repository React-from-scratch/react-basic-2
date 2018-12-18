import React, { Component } from 'react'
import './App.css'
import UserInput from './User/UserInput'
import UserOutput from './User/UserOutput'

class App extends Component {

  state = {
    comments: [
      { paragraph: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit. Ad sollicitudin fusce egestas est integer senectus. Ullamcorper.', username: 'Usuaria85' },
      { paragraph: 'Lectus et urna id duis faucibus suspendisse turpis fusce class. Penatibus sem curae lacinia non phasellus eleifend justo sem posuere porta tortor hendrerit. ', username: 'Merche' },
      { paragraph: 'Auctor consequat per hac id magna. Sollicitudin adipiscing porta. Ridiculus facilisis nulla quis dis primis vulputate. Sit magnis.', username: 'Paquita' }
    ]
  }

  inputEventHandler = (event) => {
    this.setState({
      comments: [
        { paragraph: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit. Ad sollicitudin fusce egestas est integer senectus. Ullamcorper.', username: 'Usuaria85' },
        { paragraph: 'Lectus et urna id duis faucibus suspendisse turpis fusce class. Penatibus sem curae lacinia non phasellus eleifend justo sem posuere porta tortor hendrerit. ', username: event.target.value },
        { paragraph: 'Auctor consequat per hac id magna. Sollicitudin adipiscing porta. Ridiculus facilisis nulla quis dis primis vulputate. Sit magnis.', username: 'Paquita' }
      ]
    })
  }

  render () {
    return (
      <div className='App'>
        <UserInput username={this.state.comments[1].username} 
          changed={this.inputEventHandler}/>
        <UserOutput 
          paragraph={this.state.comments[0].paragraph} 
          username={this.state.comments[0].username} />
        <UserOutput 
          paragraph={this.state.comments[1].paragraph} 
          username={this.state.comments[1].username} />
        <UserOutput 
          paragraph={this.state.comments[2].paragraph} 
          username={this.state.comments[2].username} />
      </div>
    )
  }
}

export default App
