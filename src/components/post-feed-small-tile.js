import React from 'react';

export function PostFeedSmallTile() {


	return (
		<div className="post-tile small-post-tile">
			<img src={image} alt="">
				<div className="post-content-preview">
					<div className="post-tile-title">{title}</div>
					<div className="post-tile-stats">
						<span className="post-tile-value">{pendingPayoutValue}</span>
						<span className="post-tile-votes">{numberOfVotes}</span>
					</div>
					<div className="post-tile-tags">{tags}</div>
				</div>
		</div>
	)
}