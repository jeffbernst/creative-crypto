import React from 'react';
import {Link} from "react-router-dom";

import './post-feed-large-tile.css';

export function PostFeedLargeTile(props) {
	return (
		<div className="large-post-tile">
			<div className="large-tile-image">
				<Link to={`/${props.permlink}`}>
					<img src={props.image} alt=""/>
					<div className="large-tile-title"><span>{props.title}</span></div>
				</Link>
			</div>
		</div>
	)
}