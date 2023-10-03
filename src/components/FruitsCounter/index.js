// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {m: 0, b: 0}

  Mango = () => {
    this.setState(Prev => ({m: Prev.m + 1}))
  }

  Banana = () => {
    this.setState(Prev => ({b: Prev.b + 1}))
  }

  render() {
    const {m} = this.m
    const {b} = this.b
    return (
      <div className="outerCont">
        <div className="container">
          <h1>
            Bob ate {m} mangoes {b} bananas
          </h1>
          <div className="imgContainer">
            <div className="cont1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="img"
                alt="mango"
              />
              <button className="btn" type="button" onClick={this.Mango}>
                Eat Mango
              </button>
            </div>
            <div className="cont1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="img"
                alt="banana"
              />
              <button className="btn" type="button" onClick={this.Banana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
