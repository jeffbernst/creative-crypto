import React from 'react';
import { Link, NavLink } from 'react-router-dom'

import './tag-list.css';

export function TagList() {
	return (
		<section className="top-tag-list">
      <NavLink exact to={'/'} className="top-tag top-tag-1" activeClassName="nav-selected">HOME</NavLink>
			<div className="top-tag top-tag-2">RESOURCES</div>
			<NavLink to={'/about'} className="top-tag top-tag-2" activeClassName="nav-selected">ABOUT</NavLink>
		</section>
	)
}