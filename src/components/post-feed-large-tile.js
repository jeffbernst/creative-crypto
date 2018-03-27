import React from 'react';
import {Link} from "react-router-dom";
import Shiitake from 'shiitake';

import './post-feed-large-tile.css';

export function PostFeedLargeTile(props) {
	return (
		<div className="large-post-tile">
			<div className="large-tile-image">
				<Link to={`/${props.permlink}`}>
					<img src={props.image} alt=""/>
					<div className="large-tile-content-preview">
						<div className="large-tile-title">
							<Shiitake lines={2} tagName="span">{props.title}</Shiitake>
						</div>
						<div className="large-tile-body-preview">
							<Shiitake lines={2}>{props.body}</Shiitake>
						</div>
					</div>
				</Link>
			</div>
		</div>
	)
}