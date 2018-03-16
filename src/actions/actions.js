import {
	GET_RECENT_POSTS_REQUEST,
	GET_RECENT_POSTS_SUCCESS,
	GET_RECENT_POSTS_ERROR,
	FOCUS_ON_POST,
	RETURN_TO_POSTS,
	GET_SINGLE_POST} from './actions/types';

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

export const getRecentPosts = () => async dispatch => {
	dispatch(getRecentPostsRequest());

	try {
		const recentPosts = await
	}
};
