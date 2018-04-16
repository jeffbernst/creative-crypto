import React from 'react';
import Spinner from 'react-spinkit';
import {connect} from "react-redux";

import './newsfeed.css';

import {Tweet} from './tweet';
import {getCurrentNewsfeed} from "../actions";

class Newsfeed extends React.Component {
	// componentDidMount() {
	// 	this.props.getCurrentNewsfeed();
	// }

	render() {
		// if (this.props.loadingNewsfeed) {
		// 	return <Spinner />;
		// }
		//
		// if (this.props.error) {
		// 	return <strong>{this.props.error}</strong>;
		// }
		//
		// const tweets = this.props.newsfeed.map((tweet, index) => {
		// 	return <Tweet fullText={tweet.fullText} timeSinceTweeted={tweet.timeSinceTweeted} tweetId={tweet.tweetId}/>;
		// });
		//
		// const firstTenTweets = tweets.slice(0, 9);

		return (
			<div className="newsfeed">
				{/*<a href="http://twitter.com/creative_crypto"><div className="newsfeed-title-bar">NEWSFEED</div></a>*/}
				{/*{firstTenTweets}*/}
				<a class="twitter-timeline"
					 data-height="1240"
					 href="https://twitter.com/creative_crypto?ref_src=twsrc%5Etfw">
					Tweets by creative_crypto
				</a>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		newsfeed: state.newsfeed,
		loadingNewsfeed: state.loadingNewsfeed
	};
}

const mapDispatchToProps = {
	getCurrentNewsfeed
};

export const ConnectedNewsfeed = connect(mapStateToProps, mapDispatchToProps)(Newsfeed);