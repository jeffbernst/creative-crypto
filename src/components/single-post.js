import React from 'react';
import Spinner from 'react-spinkit';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

import './single-post.css';
import {getRecentPosts} from "../actions";

class SinglePost extends React.Component {
	// create post feed with small and large tiles from state and then inject
	componentDidMount() {
		// check if i have info already

		// this.props.getRecentPosts();
		// request for single post
	}

	render() {
		return (
			<div>
				{this.props.match.params.postId}
				{this.props.currentPost.title}
				here's a post
			</div>
		)
	}
}

function mapStateToProps(state, props) {
	return {
		posts: state.posts,
		currentPost: state.posts.find(post => props.match.params.postId === post.permlink),
		loading: state.loading
	};
}

const mapDispatchToProps = {
	// get single post
};

export const ConnectedSinglePost = withRouter(connect(mapStateToProps, mapDispatchToProps)(SinglePost));
