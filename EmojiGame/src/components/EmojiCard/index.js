import './index.css'

const EmojiCard = ({props, selectedEmoji}) => {
  const {id, emojiName, emojiUrl} = props
  const onclickevent = () => {
    selectedEmoji(id)
  }
  return (
    <li>
      <button onClick={onclickevent} className="emoji-card">
        <img className="emoji-img" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
