import {
	GET_RECENT_POSTS_REQUEST,
	GET_RECENT_POSTS_SUCCESS,
	GET_RECENT_POSTS_ERROR,
	GET_SINGLE_POST_REQUEST,
	GET_SINGLE_POST_SUCCESS,
	GET_SINGLE_POST_ERROR} from './types';

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

const getSinglePostRequest = () => ({
	type: GET_SINGLE_POST_REQUEST
});

const getSinglePostSuccess = post => ({
	type: GET_SINGLE_POST_SUCCESS,
	payload: post
});

const getSinglePostError = error => ({
	type: GET_SINGLE_POST_ERROR,
	payload: error
});

// api call

function getPosts() {
	return new Promise((res, rej) => {
		steem.api.getDiscussionsByBlog({tag: 'sndbox', limit: 11}, function(err, result) {
			if (err) rej(err);
			else res(result);
		});
	})
}

function getPost(permlink) {
	return new Promise((res, rej) => {
		const currentDate = new Date().toISOString().split('.')[0];
		steem.api.getDiscussionsByAuthorBeforeDate('sndbox', permlink, currentDate, 1, function(err, result) {
			if (err) rej(err);
			else res(result);
		});
	})
}

// redux thunks

export const getRecentPosts = () => async dispatch => {
	dispatch(getRecentPostsRequest());

	try {
		const recentPosts = await getPosts();
		dispatch(getRecentPostsSuccess(recentPosts));

	} catch(err) {
		dispatch(getRecentPostsError(err))
	}
};

export const getSinglePost = permlink => async dispatch => {
	dispatch(getSinglePostRequest());

	try {
		const singlePost = await getPost(permlink);
		dispatch(getSinglePostSuccess(singlePost));

	} catch(err) {
		dispatch(getSinglePostError(err))
	}
};
