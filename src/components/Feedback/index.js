import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    isFeedbackGiven: false,
  }

  onClickEmoji = () => this.setState({isFeedbackGiven: true})

  renderFeedbackQuestion() {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="main-container">
        <div className="inner-container">
          <h1 className="heading">
            How satisfied are you with our customer support performance
          </h1>
          <ul className="emoji-container">
            {emojis.map(emoji => (
              <li key={emoji.id}>
                <button
                  type="button"
                  className="emoji-btn"
                  onClick={this.onClickEmoji}
                >
                  <img
                    src={emoji.imageUrl}
                    alt={emoji.name}
                    className="emoji"
                  />
                  <br />
                  <span className="emoji-name">{emoji.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  renderThankYouScreen() {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thankyou-container">
        <img src={loveEmojiUrl} className="love-image" alt="love emoji" />
        <h1 className="thankyou-text">Thank you!</h1>
        <p className="description">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackGiven} = this.state
    return (
      <div className="app-container">
        <div className="feedback-card">
          {isFeedbackGiven
            ? this.renderThankYouScreen()
            : this.renderFeedbackQuestion()}
        </div>
      </div>
    )
  }
}

export default Feedback
