import React from 'react';


class HelloWorld extends React.Component{
  state = {
    who: 'world'
  }
  handleButtonClick = () => {
    const allButtons = document.querySelectorAll('button');
    for(let button of allButtons) {
      button.addEventListener('click', () => 
      this.setState({
        who: button.value
      })
      )
    }
  }

  render(){
    return(
      <div>
        <p>Hello {this.state.who}!</p>
        <button value='world' onClick={this.handleButtonClick}>world</button>
        <button value='friend' onClick={this.handleButtonClick}>friend</button>
        <button value='React' onClick={this.handleButtonClick}>React</button>
      </div>
      
    )
  }
}

export default HelloWorld;