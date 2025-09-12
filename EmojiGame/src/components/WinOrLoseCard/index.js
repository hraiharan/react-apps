// Write your code here.
import './index.css'

const WinOrLoseCard = ({tryAgainbtn, score}) => {
  const didUserWin = score === 12 ? true : false
  const bgimage = didUserWin
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const userText = didUserWin ? 'You Won' : 'You Lose'
  const scoretext = didUserWin ? 'Best Score' : 'Score'
  const scorebord = `${score}/12`
  return (
    <div className="won-lose-container">
      <div>
        <h1 className="user-text">{userText}</h1>
        <p className="score-text">{scoretext}</p>
        <p className="score-bord">{scorebord}</p>
        <button type="button" className="try-again-btn" onClick={tryAgainbtn}>
          Play Again
        </button>
      </div>
      <div>
        <img src={bgimage} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
