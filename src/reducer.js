import {GET_RECENT_POSTS} from './actions/types';

const initialState = {
	posts: []
};

export const reducer = (state=initialState, action) => {
	switch(action.type) {
		case GET_RECENT_POSTS:
			return state;
		default:
			return state;
	}
};

