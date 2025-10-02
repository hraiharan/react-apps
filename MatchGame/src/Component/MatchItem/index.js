import './index.css'

const MatchItem = ({eachItem, checkImgMatch}) => {
  const {id, thumbnailUrl, category} = eachItem
  const onclickFun = () => {
    checkImgMatch(id)
  }
  return (
    <li>
      <button className="items-btn" onClick={onclickFun}>
        <img className="thum-img" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default MatchItem
