import './index.css'

const ScoreCard = ({score, reset}) => {
  console.log(score)
  return (
    <div class="Score-card">
      <img
        className="trophy"
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
      />
      <p className="score-heading">YOUR SCORE</p>
      <h1 className="score-heading">{score}</h1>
      <button onClick={reset} className="play-again-btn">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
          />
        </div>
        <h1 className="play-again-heading">PLAY AGAIN</h1>
      </button>
    </div>
  )
}

export default ScoreCard
