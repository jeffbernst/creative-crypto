import React from 'react';
import Spinner from 'react-spinkit';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

import './single-post.css';
import {getSinglePost} from "../actions";

class SinglePost extends React.Component {
	componentDidMount() {
		if (this.props.posts === undefined || this.props.posts.length === 0)
			this.props.getSinglePost(this.props.match.params.postId);
	}

	render() {
			console.log(this.props.currentPost);

			if (this.props.loading) {
				return <Spinner />;
			}

			if (this.props.error) {
				return <strong>{this.props.error}</strong>;
			}

			if (this.props.currentPost) {
				const currentPost = this.props.currentPost;

				return (
					<div className="single-post">
						<h1>{currentPost.title}</h1>
						<div className="post-info-top">add time since posted &middot; category &middot; time to read</div>
						<p>{currentPost.body}</p>
					</div>
				)
			}

			return <div>loading...</div>
	}
}

function mapStateToProps(state, props) {
	const currentPostState =
		(state.posts === undefined || state.posts.length === 0) ?
			state.currentPost : state.posts.find(post => props.match.params.postId === post.permlink);

	return {
		posts: state.posts,
		currentPost: currentPostState,
		loading: state.loading
	};
}

const mapDispatchToProps = {
	getSinglePost
};

export const ConnectedSinglePost = withRouter(connect(mapStateToProps, mapDispatchToProps)(SinglePost));
