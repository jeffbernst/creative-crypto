import React from 'react';

import './tweet.css';
import timeIcon from '../img/time-icon_blue.svg'

export function Tweet(props) {
	return (
		<div className="tweet">
			{props.fullText}
			<div className="time-since-tweeted">
				<img src={timeIcon} alt="time icon"/> {props.timeSinceTweeted}
			</div>
		</div>
	)
}