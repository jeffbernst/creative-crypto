import React from 'react';
import {Link} from "react-router-dom";

import './post-feed-small-tile.css';

export function PostFeedSmallTile(props) {
	const tagArray = props.tags.map(tag => (
		<div className="post-tile-tag">{tag}</div>
	));

	return (
		<div className="post-tile small-post-tile">
			<Link to={`/${props.permlink}`}>
				<div className="image">
					<img src={props.image} alt=""/>
					<div><span>stuff</span></div>
				</div>
				<div className="post-content-preview">
					<div className="post-tile-title">{props.title}</div>
					<div className="post-content-preview-bottom-container">
						<div className="post-tile-stats">
							<span className="post-tile-value">${props.pendingPayoutValue}</span>&nbsp;&nbsp;&nbsp;
							<span className="post-tile-votes">&#x2303;{props.numberOfVotes}</span>
						</div>
						<div className="post-tile-tag-list">{tagArray}</div>
					</div>
				</div>
			</Link>
		</div>
	)
}