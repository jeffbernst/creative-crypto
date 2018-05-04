import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import readingTime from 'reading-time'
import upvote_blue from '../img/upvote_blue.svg'
import TimeAgo from 'react-timeago'

import './single-post.css'
import { getSinglePost } from '../actions'

class SinglePost extends React.Component {
  componentDidMount () {
    if (!this.props.currentPost) {
      this.props.getSinglePost(this.props.match.params.postId)
    }
  }

  render () {
    if (this.props.error) {
      return <strong>{this.props.error}</strong>
    }

    if (this.props.currentPost) {
      const currentPost = this.props.currentPost
      const readingStats = readingTime(currentPost.body)
      const image = <img src={currentPost.image} alt=""/>
      const tagArray = currentPost.tags.map((tag, index) => (
        <div className="post-tile-tag" key={index}>{tag}</div>
      ))

      console.log({currentPost})

      return (
        <div className="single-post">
          <h1>{currentPost.title}</h1>
          <div className="post-info-top">
            <TimeAgo date={currentPost.timeSincePosted}/> &middot; {currentPost.tags[0]} &middot; {readingStats.text}
          </div>
          <div className="dtube-image">
            {currentPost.isDtube && image}
          </div>
          <div dangerouslySetInnerHTML={{__html: currentPost.bodyHtml}}/>
          <div className="single-post-stats-container">
            <div className="post-tile-tag-list single-post-tag-list">{tagArray}</div>
            <div className="single-post-stats">
              <span className="single-post-footer-value">${currentPost.payoutValue}</span>
              <span className="single-post-footer-votes"><img src={upvote_blue} alt="upvote blue"
                                                              className="upvote-img"/> {currentPost.numberOfVotes}</span>
            </div>
          </div>
        </div>
      )
    }

    return <div></div>
  }
}

function mapStateToProps (state, props) {
  return {
    currentPost: state.posts.find(post => props.match.params.postId === post.permlink),
    loading: state.loading
  }
}

const mapDispatchToProps = {
  getSinglePost
}

export const ConnectedSinglePost = withRouter(connect(mapStateToProps, mapDispatchToProps)(SinglePost))
