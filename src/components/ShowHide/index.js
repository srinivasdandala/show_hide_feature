// Write your code here
import './index.css'
import {Component} from 'react'

class ShowHide extends Component {
  state = {firstName: true, lastName: true}

  showHideFirsName = () => {
    console.log('hi')
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  showHideSecondName = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state

    return (
      <div className="main-heading">
        <h1 className="heading">Show/Hide</h1>
        <div className="main-button-container">
          <div className="button-container">
            <button
              className="button"
              type="button"
              onClick={this.showHideFirsName}
            >
              Show/Hide Firstname
            </button>
            {firstName ? (
              <div className="box">
                <h1 className="box-heading">Joe</h1>
              </div>
            ) : null}
          </div>
          <div className="button-container">
            <button
              className="button"
              type="button"
              onClick={this.showHideSecondName}
            >
              Show/Hide Lastname
            </button>
            {lastName ? (
              <div className="box">
                <h1 className="box-heading">Jonas</h1>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
