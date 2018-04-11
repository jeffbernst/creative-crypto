import React from 'react';
import Spinner from 'react-spinkit';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
// import marked from 'marked';
import Markdown from 'react-markdown';

import Remarkable from 'remarkable';

import './single-post.css';
import {getSinglePost} from "../actions";
import { any as linksAny } from '../condenser/Links'
import linksRe from '../condenser/Links'
import { linkify } from '../condenser/HtmlReady'

const md = new Remarkable({html: true, linkify: true});
// const ReactMarkdown = require('react-markdown');

class SinglePost extends React.Component {
	componentDidMount() {
		// if (this.props.posts === undefined || this.props.posts.length === 0)
		// 	this.props.getSinglePost(this.props.match.params.postId);

		// if post is null, fetch it
		if (!this.props.currentPost) {
			this.props.getSinglePost(this.props.match.params.postId);
		}
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

				// console.log(currentPost)

        // let content = linkify(currentPost.body)
        // console.log(content)

				const bodyMarkdown = md.render(currentPost.body);
				// console.log(currentPost.body);

        let content = linkify(bodyMarkdown)

        content.replace(
          /(^|[^a-zA-Z0-9_!#$%&*@＠\/]|(^|[^a-zA-Z0-9_+~.-\/#]))[@＠]([a-z][-\.a-z\d]+[a-z\d])/gi,
          (match, preceeding1, preceeding2, user) => {
            const userLower = user.toLowerCase();
            return `<a href="https://steemit.com/@${userLower}">@${user}</a>`
          }
        );

        console.log(content)

				return (
					<div className="single-post">
						<h1>{currentPost.title}</h1>
						<div className="post-info-top">{currentPost.timeSincePosted} ago &middot; {currentPost.tags[0]}</div>
						<div dangerouslySetInnerHTML={{__html: bodyMarkdown}} />
						{/*<Markdown source={currentPost.body} escapeHtml={false}/>*/}
					</div>
				)
			}

			return <div>loading...</div>
	}
}

function mapStateToProps(state, props) {
	// const currentPostState =
	// 	(state.posts === undefined || state.posts.length === 0) ?
	// 		state.currentPost : state.posts.find(post => props.match.params.postId === post.permlink);

	return {
		currentPost: state.posts.find(post => props.match.params.postId === post.permlink),
		loading: state.loading
	};
}

const mapDispatchToProps = {
	getSinglePost
};

export const ConnectedSinglePost = withRouter(connect(mapStateToProps, mapDispatchToProps)(SinglePost));
