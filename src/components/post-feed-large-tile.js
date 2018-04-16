import React from 'react'
import { Link } from 'react-router-dom'
import Shiitake from 'shiitake'

import './post-feed-large-tile.css'

export function PostFeedLargeTile (props) {
  return (
    <div className="large-post-tile">
      <Link to={`/${props.permlink}`}>
        <img src={props.image} alt=""/>
      </Link>
      <Link to={`/${props.permlink}`}>
        <div className="large-tile-content-preview">
          <div className="large-tile-title">
            <Shiitake lines={2} tagName="span">{props.title}</Shiitake>
          </div>
          <div className="large-tile-tag">
            <span>{props.tags[0].toUpperCase()}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}