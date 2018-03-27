import React from 'react';
import {Link} from "react-router-dom";
import Shiitake from 'shiitake';

import './post-feed-small-tile.css';
import upvote_blue from '../img/upvote_blue.svg'

export function PostFeedSmallTile(props) {
	const tagArray = props.tags.map(tag => (
		<div className="post-tile-tag">{tag}</div>
	));
	tagArray.shift();

	return (
		<div className="post-tile small-post-tile">
			<Link to={`/${props.permlink}`}>
				<div className="small-tile-image">
					<img src={props.image} alt=""/>
					<div><span>{props.tags[0]}</span></div>
				</div>
				<div className="post-content-preview">
					<Shiitake lines={2} className="post-tile-title" >{props.title}</Shiitake>
					<Shiitake lines={2} className="post-body-preview">{props.body}</Shiitake>
					<div className="post-content-preview-bottom-container">
						<div className="post-tile-stats">
							<span className="post-tile-value">${props.pendingPayoutValue}</span>
							<span className="post-tile-votes"><img src={upvote_blue} alt="upvote blue" className="upvote-img"/> {props.numberOfVotes}</span>
							<span className="post-tile-time">{props.timeSincePosted}</span> ago
						</div>
						<div className="post-tile-tag-list">{tagArray}</div>
					</div>
				</div>
			</Link>
		</div>
	)
}