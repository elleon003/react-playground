import React, {Component} from 'react';


class RouletteGun extends Component {
  static defaultProps = {
    bulletInChamber: 8
  }
  constructor(props){
    super(props)
    this.state = {
      chamber: null,
      spinningTheChamber: false,
    };

    this.handleButtonClick = () => {
      console.log('Button clicked!')
      this.setState({
        spinningTheChamber: true
      })
      this.timeout = setTimeout(() => {
        let newNumber = Math.ceil(Math.random() * 8)
        this.setState({
          chamber: newNumber,
          spinningTheChamber: false
        })
        console.log(this.state.chamber)  
      }, 2000) 
         
    }
  }

  renderDisplay() {
    const { chamber, spinningTheChamber } = this.state
    const { bulletInChamber } = this.props
    if (spinningTheChamber) {
      return 'spinning the chamber and pulling the trigger! ...'
    } else if (chamber === bulletInChamber) {
      return 'BANG!!!!'
    } else {
      return `you're safe!!`
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  render() {
    return(
      <div>
        <p>{this.renderDisplay()}</p>
        <button onClick={this.handleButtonClick}>Pull the trigger!</button>
      </div>
    )
  }
}

export default RouletteGun