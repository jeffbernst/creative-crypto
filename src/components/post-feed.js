import React from 'react'
import Spinner from 'react-spinkit'
import { connect } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroller'

import './post-feed.css'
import { PostFeedSmallTile } from './post-feed-small-tile'
import { PostFeedLargeTile } from './post-feed-large-tile'
import { getRecentPosts } from '../actions/index'

// const removeMd = require('remove-markdown');

import removeMd from 'remove-markdown'

class PostFeed extends React.Component {
  // create post feed with small and large tiles from state and then inject
  componentDidMount () {
    if (this.props.posts.length <= 1)
      this.props.getRecentPosts()
  }

  render () {
    if (this.props.loading) {
      return <Spinner/>
    }

    if (this.props.error) {
      return <strong>{this.props.error}</strong>
    }

    const postGrid = this.props.posts.map((post, index) => {

      const postBodyPreview = removeMd(post.body.replace(/^!?\[\S*\)/, ''))

      const smallTile = (
        <PostFeedSmallTile
          key={index + 1}
          title={post.title}
          body={postBodyPreview}
          timeSincePosted={post.timeSincePosted}
          image={post.image}
          pendingPayoutValue={post.pendingPayoutValue}
          numberOfVotes={post.numberOfVotes}
          tags={post.tags}
          permlink={post.permlink}/>
      )

      const largeTile = (
        <PostFeedLargeTile
          key={index}
          title={post.title}
          body={postBodyPreview}
          timeSincePosted={post.timeSincePosted}
          image={post.image}
          pendingPayoutValue={post.pendingPayoutValue}
          numberOfVotes={post.numberOfVotes}
          tags={post.tags}
          permlink={post.permlink}/>
      )

      if (index === 0) return [largeTile, smallTile]
      else return [smallTile]
    })

    // {/*<div className="post-feed">*/}
    return (
      <div>
        <InfiniteScroll
          // pageStart={0}
          // loadMore={loadFunc}
          // hasMore={true}
          className="post-feed"
          loader={<div className="loader" key={0}>Loading ...</div>}
        >
          {postGrid}
        </InfiniteScroll>
    </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    posts: state.posts,
    loading: state.loading
  }
}

const mapDispatchToProps = {
  getRecentPosts
}

export const ConnectedPostFeed = connect(mapStateToProps, mapDispatchToProps)(PostFeed)
