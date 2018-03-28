import React from 'react';

import './tweet.css';
import timeIcon from '../img/time-icon_blue.svg'

export function Tweet(props) {
	return (
		<div className="tweet">
			<a href={`https://twitter.com/statuses/${props.tweetId}`}>
				{props.fullText}
				<div className="time-since-tweeted">
					<img src={timeIcon} alt="time icon"/> {props.timeSinceTweeted}
				</div>
			</a>
		</div>
	)
}