import React from 'react';

export function PostFeedSmallTile(props) {
	return (
		<div className="post-tile small-post-tile">
			<img src={props.image} alt="" />
				<div className="post-content-preview">
					<div className="post-tile-title">{props.title}</div>
					<div className="post-tile-stats">
						<span className="post-tile-value">{props.pendingPayoutValue}</span>
						<span className="post-tile-votes">{props.numberOfVotes}</span>
					</div>
					<div className="post-tile-tags">{props.tags}</div>
				</div>
		</div>
	)
}