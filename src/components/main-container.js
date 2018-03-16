import React from 'react';

import './main-container.css';

import PostFeed from './post-feed';
import {NewsFeed} from './newsfeed';
import {SinglePost} from "./single-post";

export function MainContainer() {
		return (
			<main className='main-container'>
				<PostFeed />
				<SinglePost />
				<NewsFeed />
			</main>
		)
}