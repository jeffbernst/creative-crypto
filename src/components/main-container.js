import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './main-container.css';

import {ConnectedPostFeed} from './post-feed';
import {NewsFeed} from './newsfeed';
import {ConnectedSinglePost} from "./single-post";

export function MainContainer() {
		return (
			<main className='main-container'>
				<Route exact path="/" component={ConnectedPostFeed} />
				<Route exact path="/:postId" component={ConnectedSinglePost} />
				<NewsFeed />
			</main>
		)
}

// TODO wrap post feed and single post in routes and display based on route