// Write your code here.
import './index.css'

const NavBar = ({props}) => {
  const [score, topScore, winorlose] = props
  return (
    <div className="nav-bar-container">
      <div className="nav-bar-logo-container">
        <img
          className="nav-bar-logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="nav-bar-heading">Emoji Game</h1>
      </div>
      {!winorlose && (
        <div className="nav-bar-score-container">
          <p className="scores">Score: {score}</p>
          <p className="scores">Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}
export default NavBar
