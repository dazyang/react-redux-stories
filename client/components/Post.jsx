import React from 'react'
import PropTypes from 'prop-types'

const Post = ({ title, selftext, author, created}) => (
  <div>
    <h1>{title}</h1>
    <p>{selftext} </p>
    <p>Author: {author}</p>
    <p>Date: {created} </p>
  </div>

)

// Post.propTypes = {
//   title: PropTypes.string.isRequired,
//   selfText: PropTypes.string.isRequired
// }

export default Post
