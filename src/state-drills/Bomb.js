import React, {Component} from 'react';

class Bomb extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      display: 'tick'
    }  
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      let newCount = this.state.count + 1;
      this.setState({
        count: newCount
      })
      if (newCount >=8) {
        this.setState({
          display: 'BOOM!!!!'
        })
        this.componentWillUnmount();
      } else if (newCount % 2 === 0) {
        this.setState({
          display: 'tick'
        })
      } else {
        this.setState({
          display: 'tock'
        })
      }
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return(
      <div>
        <p>{this.state.display}</p>
      </div>
    )
  }
}

export default Bomb