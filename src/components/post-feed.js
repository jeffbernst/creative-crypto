import React from 'react'
import { connect } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroller'

import './post-feed.css'
import { PostFeedSmallTile } from './post-feed-small-tile'
import { PostFeedLargeTile } from './post-feed-large-tile'
import { getRecentPosts } from '../actions/index'

import removeMd from 'remove-markdown'

class PostFeed extends React.Component {
  componentDidMount () {
    if (this.props.posts.length <= 1)
      this.props.getRecentPosts()
  }

  render () {
    if (this.props.error) {
      console.log(this.props.error)
      return <strong>{this.props.error.toString()}</strong>
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
          payoutValue={post.payoutValue}
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
          payoutValue={post.payoutValue}
          numberOfVotes={post.numberOfVotes}
          tags={post.tags}
          permlink={post.permlink}/>
      )

      if (index === 0) return [largeTile, smallTile]
      else return [smallTile]
    })

    function loadMore () {
      console.log('need to load more')
    }

    return (
      <div>
        <InfiniteScroll
          loadMore={loadMore}
          className="post-feed"
          loader={<div className="loader">Loading ...</div>}
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
    loading: state.loading,
    error: state.error
  }
}

const mapDispatchToProps = {
  getRecentPosts
}

export const ConnectedPostFeed = connect(mapStateToProps, mapDispatchToProps)(PostFeed)
