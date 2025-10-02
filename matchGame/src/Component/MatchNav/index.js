import './index.css'

const MatchNav = ({score, time}) => {
  return (
    <ul className="match-nav-container">
      <li>
        <img
          className="nav-logo"
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
        />
      </li>
      <li className="nav-score-time-container">
        <div className="nav-score-time-container">
          <p className="score-p">Score: </p>
          <h1 className="nav-heading-ele">{score}</h1>
        </div>
        <div className="nav-score-time-container">
          <img
            className="nav-timer-img"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
          <p className="nav-heading-ele"> {time} sec</p>
        </div>
      </li>
    </ul>
  )
}

export default MatchNav
