import './index.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

class EnterContainer extends Component {
  state = {url: '', user: '', pass: ''}
  colorClasses = [
    'color-454f84',
    'color-0b69ff',
    'color-94a3b8',
    'color-b6c3ca',
    'color-7683cb',
    'color-f59e0b',
    'color-10b981',
    'color-f97316',
    'color-14b8a6',
    'color-b91c1c',
  ]
  onsubmitevent = event => {
    event.preventDefault()
    const rdin = Math.floor(Math.random() * this.colorClasses.length)
    const classname = this.colorClasses[rdin]
    const {url, user, pass} = this.state
    const id = uuidv4()
    const {uploadData} = this.props
    uploadData(id, url, user, pass, classname)
    this.setState({url: '', user: '', pass: ''})
  }
  onChangeUrl = event => {
    this.setState({url: event.target.value})
  }
  onChangeuser = event => {
    this.setState({user: event.target.value})
  }
  onChangepass = event => {
    this.setState({pass: event.target.value})
  }
  render = () => {
    const {url, user, pass} = this.state
    return (
      <div className="main-form-conatainer">
        <form className="form-conatainer" onSubmit={this.onsubmitevent}>
          <h1>Add New Password</h1>
          <div className="input-btn-conatainers">
            <button className="input-conatainers">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
              />
            </button>
            <input
              value={url}
              onChange={this.onChangeUrl}
              className="input-conatainers inputs"
              type="text"
              placeholder="Enter Website"
            />
          </div>
          <div className="input-btn-conatainers">
            <button className="input-conatainers">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
              />
            </button>
            <input
              value={user}
              onChange={this.onChangeuser}
              className="input-conatainers inputs"
              type="text"
              placeholder="Enter Username"
            />
          </div>
          <div className="input-btn-conatainers">
            <button type="submit" className="input-conatainers">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
              />
            </button>
            <input
              value={pass}
              onChange={this.onChangepass}
              className="input-conatainers inputs"
              type="password"
              placeholder="Enter Password"
            />
          </div>
          <div className="add-btn-container">
            <button className="add-btn">Add</button>
          </div>
        </form>
        <div className="make-it-Center">
          <img
            className="password-manager-img-lg"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
          />
          <img
            className="password-manager-img-sm"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
          />
        </div>
      </div>
    )
  }
}

export default EnterContainer
