import {
	GET_RECENT_POSTS_REQUEST,
	GET_RECENT_POSTS_SUCCESS,
	GET_RECENT_POSTS_ERROR,
	FOCUS_ON_POST,
	RETURN_TO_POSTS,
	GET_SINGLE_POST} from './types';

import steem from 'steem';
steem.api.setOptions({ url: 'https://api.steemit.com' });

// actions

const getRecentPostsRequest = () => ({
	type: GET_RECENT_POSTS_REQUEST
});

const getRecentPostsSuccess = posts => ({
	type: GET_RECENT_POSTS_SUCCESS,
	payload: posts
});

const getRecentPostsError = error => ({
	type: GET_RECENT_POSTS_ERROR,
	payload: error
});

const focusOnPost = post => ({
	type: FOCUS_ON_POST,
	payload: post
});

const returnToPosts = posts => ({
	type: RETURN_TO_POSTS,
	payload: posts
});

const getSinglePost = post => ({
	type: GET_SINGLE_POST,
	paylaod: post
});

// api call

function getPosts() {
	return new Promise((res, rej) => {
		steem.api.getDiscussionsByBlog({tag: 'sndbox', limit: 10}, function(err, result) {
			if (err) rej(err);
			else res(result);
		});
	})
}

// redux thunk

export const getRecentPosts = () => async dispatch => {
	dispatch(getRecentPostsRequest());

	try {
		const recentPosts = await getPosts();
		dispatch(getRecentPostsSuccess(recentPosts));

	} catch(err) {
		dispatch(getRecentPostsError(err))
	}
};

// TODO create get single post api request