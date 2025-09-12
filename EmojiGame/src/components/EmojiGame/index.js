import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    userSelectedEmoji: [],
    score: 0,
    topScore: 0,
    winorlose: false,
  }
  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  selectedEmoji = id => {
    const {userSelectedEmoji} = this.state
    const ifpresent = userSelectedEmoji.filter(eachItem => id === eachItem)

    if (ifpresent.length === 0) {
      this.setState(prevState => ({
        userSelectedEmoji: [...prevState.userSelectedEmoji, id],
        score: prevState.score + 1,
        winorlose: prevState.score + 1 === 12,
      }))
    } else {
      this.setState({
        winorlose: true,
      })
    }
  }
  tryAgainbtn = () => {
    this.setState(prevState => ({
      userSelectedEmoji: [],
      topScore: Math.max(prevState.score, prevState.topScore),
      score: 0,
      winorlose: false,
    }))
  }
  render() {
    const {score, topScore, winorlose} = this.state
    const shuffledList = this.shuffledEmojisList()

    return (
      <div>
        <NavBar props={[score, topScore, winorlose]} />
        <div className="emojicard-or-scoreBord">
          {!winorlose && (
            <ul className="emojoi-container">
              {shuffledList.map(each => (
                <EmojiCard
                  props={each}
                  selectedEmoji={this.selectedEmoji}
                  key={each.id}
                />
              ))}
            </ul>
          )}

          {winorlose && (
            <WinOrLoseCard score={score} tryAgainbtn={this.tryAgainbtn} />
          )}
        </div>
      </div>
    )
  }
}
export default EmojiGame
