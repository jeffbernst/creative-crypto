import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import {NavBar} from "./components/nav-bar";
import {TagList} from "./components/tag-list";
import {MainContainer} from "./components/main-container";

export class App extends Component {
  render() {
    return (
    	<div>
				<NavBar />
				<TagList />
				<MainContainer />
			</div>
    );
  };
}