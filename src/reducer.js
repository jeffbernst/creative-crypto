import {
	GET_RECENT_POSTS_REQUEST,
	GET_RECENT_POSTS_SUCCESS,
	GET_RECENT_POSTS_ERROR,
	FOCUS_ON_POST,
	RETURN_TO_POSTS,
	GET_SINGLE_POST} from './actions/types';


const initialState = {
	posts: [],
	currentPost: null,
	loading: false
};

export const reducer = (state = initialState, action) => {
	switch(action.type) {
		case GET_RECENT_POSTS_REQUEST:
			return {
				...state,
				loading: true
			};
		case GET_RECENT_POSTS_SUCCESS:
			return state;
		case GET_RECENT_POSTS_ERROR:
			return state;
		case FOCUS_ON_POST:
			return state;
		case RETURN_TO_POSTS:
			return state;
		case GET_SINGLE_POST:
			return state;
		default:
			return state;
	}
};
