import React from 'react'
// import Spinner from 'react-spinkit'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import readingTime from 'reading-time'
import upvote_blue from '../img/upvote_blue.svg'
// import marked from 'marked';
// import Markdown from 'react-markdown';
import TimeAgo from 'react-timeago'

// import Remarkable from 'remarkable';

import './single-post.css'
import { getSinglePost } from '../actions'

import { getHtml } from '../busy/Body'

// const md = new Remarkable({html: true, linkify: true});
// const ReactMarkdown = require('react-markdown');

class SinglePost extends React.Component {
  componentDidMount () {
    // if (this.props.posts === undefined || this.props.posts.length === 0)
    // 	this.props.getSinglePost(this.props.match.params.postId);

    // if post is null, fetch it
    if (!this.props.currentPost) {
      this.props.getSinglePost(this.props.match.params.postId)
    }
  }

  render () {
    // if (this.props.loading) {
    //   return <Spinner color="var(--text-color)" name="wave"/>
    // }

    if (this.props.error) {
      return <strong>{this.props.error}</strong>
    }

    if (this.props.currentPost) {
      const currentPost = this.props.currentPost
      const htmlBody = getHtml(currentPost.body, {}, 'text')
      console.log({currentPost})
      const readingStats = readingTime(currentPost.body)
      const tagArray = currentPost.tags.map((tag, index) => (
        <div className="post-tile-tag" key={index}>{tag}</div>
      ))

      return (
        <div className="single-post">
          <h1>{currentPost.title}</h1>
          <div
            // className="post-info-top">{currentPost.timeSincePosted} &middot; {currentPost.tags[0]} &middot; {readingStats.text}</div>
          className="post-info-top"><TimeAgo date={currentPost.timeSincePosted} /> &middot; {currentPost.tags[0]} &middot; {readingStats.text}</div>

          <div dangerouslySetInnerHTML={{__html: htmlBody}}/>
          <div className="single-post-stats-container">
            <div className="post-tile-tag-list">{tagArray}</div>
            <div className="single-post-stats">
              <span className="single-post-footer-value">${currentPost.payoutValue}</span>
              <span className="single-post-footer-votes"><img src={upvote_blue} alt="upvote blue" className="upvote-img"/> {currentPost.numberOfVotes}</span>
              {/*<span className="post-tile-time">{currentPost.timeSincePosted}</span>*/}
            </div>
          </div>
        </div>
      )
    }

    return <div></div>
  }
}

function mapStateToProps (state, props) {
  // const currentPostState =
  // 	(state.posts === undefined || state.posts.length === 0) ?
  // 		state.currentPost : state.posts.find(post => props.match.params.postId === post.permlink);

  return {
    currentPost: state.posts.find(post => props.match.params.postId === post.permlink),
    loading: state.loading
    // pendingPayoutValue: state.pendingPayoutValue,
    // numberOfVotes: state.numberOfVotes,
    // timeSincePosted: state.timeSincePosted,
    // tags: state.tags
  }
}

const mapDispatchToProps = {
  getSinglePost
}

export const ConnectedSinglePost = withRouter(connect(mapStateToProps, mapDispatchToProps)(SinglePost))
