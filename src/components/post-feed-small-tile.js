import React from 'react';
import {Link} from "react-router-dom";

export function PostFeedSmallTile(props) {
	return (
		<div className="post-tile small-post-tile">
			<img src={props.image} alt="" />
				<div className="post-content-preview">
					<Link to={`/${props.permlink}`}>
						<div className="post-tile-title">{props.title}</div>
					</Link>
					<div className="post-tile-stats">
						<span className="post-tile-value">{props.pendingPayoutValue}</span>
						<span className="post-tile-votes">{props.numberOfVotes}</span>
					</div>
					<div className="post-tile-tags">{props.tags}</div>
				</div>
		</div>
	)
}