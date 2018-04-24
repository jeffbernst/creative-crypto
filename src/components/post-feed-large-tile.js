import React from 'react'
import { Link } from 'react-router-dom'
import Shiitake from 'shiitake'
import TimeAgo from 'react-timeago'

import './post-feed-large-tile.css'
import upvote_blue from '../img/upvote_blue.svg'

export function PostFeedLargeTile (props) {
  const tagArray = props.tags.map((tag, index) => (
    <div className="post-tile-tag" key={index}>{tag}</div>
  ));

  return (
    <div className="large-post-tile">
      <Link to={`/${props.permlink}`}>
        <img src={props.image} alt=""/>
      </Link>
      <Link to={`/${props.permlink}`}>
        <div className="large-tile-content-preview">
          <div className="large-tile-title">
            <Shiitake lines={3} >{props.title}</Shiitake>
          </div>
          <div className="post-body-preview">
            <Shiitake lines={4} >{props.body}</Shiitake>
          </div>
          {/*<div className="large-tile-tag">*/}
            {/*<span>{props.tags[0].toUpperCase()}</span>*/}
          {/*</div>*/}
          <div className="post-content-preview-bottom-container">
            <div className="post-tile-stats-large-tile">
              <span className="post-tile-value">${props.pendingPayoutValue}</span>
              <span className="post-tile-votes"><img src={upvote_blue} alt="upvote blue" className="upvote-img"/> {props.numberOfVotes}</span>
              {/*<span className="post-tile-time">{props.timeSincePosted}</span>*/}
              <TimeAgo date={props.timeSincePosted} />
            </div>
            <div className="post-tile-tag-list">{tagArray}</div>
          </div>
        </div>
      </Link>
    </div>
  )
}