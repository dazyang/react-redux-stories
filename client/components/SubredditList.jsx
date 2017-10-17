import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import Post from './Post'

const Subreddit = ({subreddits}) => (
  <div>
    {subreddits.map((post, i) =>
      <Post
        key={i}
        title={post.title}
        selftext={post.selftext}
        author={post.author}
        created={post.created}

        />
    )}
  </div>
)

Subreddit.propTypes = {
  subreddits: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  console.log({state})
  return {
    subreddits: state.subreddits
  }
}

export default connect(
  mapStateToProps
)(Subreddit)
