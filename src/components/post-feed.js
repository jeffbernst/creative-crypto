import React from 'react';
import Spinner from 'react-spinkit';
import {connect} from 'react-redux';
import './post-feed.css';
import {PostFeedSmallTile} from "./post-feed-small-tile";
import {PostFeedLargeTile} from "./post-feed-large-tile";
import {getRecentPosts} from "../actions/index";

class PostFeed extends React.Component {
	// create post feed with small and large tiles from state and then inject
	componentDidMount() {
		if (this.props.posts === undefined || this.props.posts.length === 0)
			this.props.getRecentPosts();
		// TODO check to see if i have the posts already, then do API call if not
	}

	createGrid() {
		// TODO use destructuring on these variables
		const postGrid = this.props.posts.map((post, index) => {
			const title = post.title;
			// const body = post.body;
			// const bodyPreview = body.slice(0, 70);
			const tags = JSON.parse(post.json_metadata).tags;
			const image = JSON.parse(post.json_metadata).image[0];
			const numberOfVotes = post.active_votes.length;
			// const createdData = post.created;
			const pendingPayoutValue = post.pending_payout_value;
			// const postUrl = post.url;
			const permlink = post.permlink;

			const smallTile = (
				<PostFeedSmallTile
					key={index + 1}
					title={title}
					image={image}
					pendingPayoutValue={pendingPayoutValue}
					numberOfVotes={numberOfVotes}
					tags={tags}
					permlink={permlink}/>
			);

			const largeTile = (
				<PostFeedLargeTile
					key={index}
					title={title}
					image={image}
					pendingPayoutValue={pendingPayoutValue}
					numberOfVotes={numberOfVotes}
					tags={tags}
					permlink={permlink}/>
			);

			if (index === 0) return [largeTile, smallTile];
			else return [smallTile];
		});

		return postGrid;
	}

	render() {
		if (this.props.loading) {
			return <Spinner />;
		}

		if (this.props.error) {
			return <strong>{this.props.error}</strong>;
		}

		return (
			<div className="post-feed">
				{this.createGrid()}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		posts: state.posts,
		loading: state.loading
	};
}

const mapDispatchToProps = {
	getRecentPosts
};

export const ConnectedPostFeed = connect(mapStateToProps, mapDispatchToProps)(PostFeed);
