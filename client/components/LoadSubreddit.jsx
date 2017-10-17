import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

// change to stateful component
class LoadSubreddit extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      newSubreddit: ''
    }
    this.userInput = this.userInput.bind(this)
  }

  userInput (e) {
    this.setState({newSubreddit: e.target.value})
  }

  render () {
    return (
      <div>
          <input type='text' name='newSubreddit' placeholder='Post titles' value={this.state.newSubreddit} onChange={this.userInput}/>
          <button
            onClick={() => this.props.dispatch(fetchPosts(this.state.newSubreddit))}
            >Fetch Posts</button>
      </div>
    )
  }
}

export default connect()(LoadSubreddit)
