import React from 'react';

import './newsfeed.css';

export function NewsFeed() {
	return (
		<div className="newsfeed">
			<a class="twitter-timeline"
				 data-height="1660"
				 href="https://twitter.com/creative_crypto?ref_src=twsrc%5Etfw">
				Tweets by creative_crypto
			</a>
		</div>
	)
}