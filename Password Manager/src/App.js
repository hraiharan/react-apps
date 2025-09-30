import './App.css'
import {Component} from 'react'
import EnterContainer from './Component/EnterContainer'
import PasswordContainer from './Component/PasswordContainer'

class App extends Component {
  state = {
    passList: [],
    searchele: '',
    ischecked: false,
  }

  componentDidMount() {
    const savedPasswords = localStorage.getItem('passList')
    if (savedPasswords) {
      this.setState({passList: JSON.parse(savedPasswords)})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const prevPassList = prevState.passList
    const {passList} = this.state
    if (prevPassList !== passList) {
      localStorage.setItem('passList', JSON.stringify(passList))
    }
  }

  uploadData = (id, url, user, pass, classname) => {
    this.setState(prevState => ({
      passList: [...prevState.passList, {id, url, user, pass, classname}],
    }))
  }

  searchPassword = event => {
    this.setState({searchele: event.target.value})
  }

  ondeletePassword = id => {
    const {passList} = this.state
    const updatedList = passList.filter(eachItem => eachItem.id !== id)
    this.setState({passList: updatedList})
  }

  isCheckedORNot = event => {
    this.setState({ischecked: event.target.checked})
  }

  render() {
    const {passList, searchele, ischecked} = this.state

    const filterdPasswordList = passList.filter(eachItem => {
      return (
        eachItem.url.toLowerCase().includes(searchele.toLowerCase()) ||
        eachItem.user.toLowerCase().includes(searchele.toLowerCase())
      )
    })

    return (
      <div className="PasswordManager-Container">
        <img
          className="logo-img"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />
        <EnterContainer uploadData={this.uploadData} />
        <div className="sub-password-Container">
          <div className="password-Container">
            <div className="password-heading">
              <h1 className="heading-p">Your Passwords</h1>
              <p className="counter">{filterdPasswordList.length}</p>
            </div>
            <div className="password-heading">
              <button className="searchBar">
                <img
                  className="search-icon"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                />
              </button>
              <input
                onChange={this.searchPassword}
                value={searchele}
                type="search"
                placeholder="Search"
                className="searchBar search-input"
              />
            </div>
          </div>
          <hr />
          <div className="showPassword-Container">
            <div className="sp">
              <input
                className="sp-1"
                onChange={this.isCheckedORNot}
                type="checkbox"
                id="checkbox"
              />
              <label className="sp-1" htmlFor="checkbox">
                Show passwords
              </label>
            </div>
          </div>
          {filterdPasswordList.length === 0 && (
            <div className="no-Container">
              <img
                className="nopassword"
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
              />
              <p>No Passwords</p>
            </div>
          )}
          {filterdPasswordList.length !== 0 && (
            <ul>
              {filterdPasswordList.map(eachItem => (
                <PasswordContainer
                  eachItem={eachItem}
                  ondeletePassword={this.ondeletePassword}
                  key={eachItem.id}
                  ischecked={ischecked}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default App
