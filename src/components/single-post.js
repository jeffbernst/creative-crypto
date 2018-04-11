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

        let content = currentPost.replace(linksAny('gi'), ln => {
          if (linksRe.image.test(ln)) {
            return `<img src="${ln}" />`;
          }
          return `<a href="${ln}">${ln}</a>`;
        });
        console.log(content)

				const bodyMarkdown = md.render(currentPost.body);
				// console.log(currentPost.body);

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
