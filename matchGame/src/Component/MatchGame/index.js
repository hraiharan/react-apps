import './index.css'
import {Component} from 'react'
import MatchItem from '../MatchItem'
import MatchNav from '../MatchNav'
import ScoreCard from '../ScoreCard'

class MatchGame extends Component {
  state = {
    timer: 60,
    score: 0,
    selectedTabid: '',
    selectedTabUrl: '',
    selectedUrlId: '',
    timeID: null,
    showScoreCard: false,
  }

  componentDidMount() {
    const {imagesList, tabsList} = this.props
    this.setState({
      selectedTabUrl: imagesList[0].imageUrl,
      selectedUrlId: imagesList[0].id,
      selectedTabid: tabsList[0].tabId,
    })
    const timeID = setInterval(this.timerfunction, 1000)
    this.setState({timeID: timeID})
  }

  changeImg = () => {
    const {imagesList} = this.props
    const randomimdSelected =
      imagesList[Math.floor(Math.random() * imagesList.length)]
    this.setState({
      selectedTabUrl: randomimdSelected.imageUrl,
      selectedUrlId: randomimdSelected.id,
    })
  }
  reset = () => {
    this.componentDidMount()

    this.setState({
      showScoreCard: false,
      timer: 60,
      score: 0,
    })
  }

  timerfunction = () => {
    const {timer, timeID} = this.state
    if (timer === 0) {
      clearInterval(timeID)
      this.setState({showScoreCard: true})
    } else {
      this.setState(prevState => ({timer: prevState.timer - 1}))
    }
  }

  selectList = tabId => {
    this.setState({selectedTabid: tabId})
  }

  checkImgMatch = id => {
    const {selectedUrlId} = this.state
    if (selectedUrlId === id) {
      this.setState(prevState => ({score: prevState.score + 1}))
      this.changeImg()
    } else {
      const {timeID} = this.state
      clearInterval(timeID)
      this.setState({showScoreCard: true})
    }
  }

  render() {
    const {tabsList, imagesList} = this.props
    const {selectedTabid, selectedTabUrl, score, timer, showScoreCard} =
      this.state

    const filteredList = imagesList.filter(
      eachItem => selectedTabid === eachItem.category,
    )
    return (
      <div>
        <MatchNav score={score} time={timer} />
        {!showScoreCard && (
          <div className="main-container">
            <img src={selectedTabUrl} alt="match" className="img-game-select" />

            <ul className="select-list">
              {tabsList.map(eachItem => {
                const classname =
                  selectedTabid === eachItem.tabId
                    ? 'selectedclass'
                    : 'unselectedclass'
                return (
                  <li key={eachItem.tabId}>
                    <button
                      className={classname}
                      onClick={() => {
                        this.selectList(eachItem.tabId)
                      }}
                    >
                      {eachItem.displayText}
                    </button>
                  </li>
                )
              })}
            </ul>

            <ul className="listItem">
              {filteredList.map(eachItem => (
                <MatchItem
                  key={eachItem.id}
                  eachItem={eachItem}
                  checkImgMatch={this.checkImgMatch}
                />
              ))}
            </ul>
          </div>
        )}
        {showScoreCard && (
          <div className="main-container">
            <ScoreCard score={score} reset={this.reset} />
          </div>
        )}
      </div>
    )
  }
}

export default MatchGame
