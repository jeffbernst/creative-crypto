import React from 'react';
import {Route} from "react-router-dom";

import './main-container.css';

import {ConnectedPostFeed} from './post-feed';
import {ConnectedNewsfeed} from './newsfeed';
import {ConnectedSinglePost} from "./single-post";

export function MainContainer() {
		return (
			<main className='main-container'>
				<Route exact path="/" component={ConnectedPostFeed} />
				<Route exact path="/:postId" component={ConnectedSinglePost} />
				<ConnectedNewsfeed />
			</main>
		)
}

// TODO wrap post feed and single post in routes and display based on route