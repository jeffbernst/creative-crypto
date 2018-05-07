import React from 'react';
import { Link } from 'react-router-dom'

import './tag-list.css';

export function TagList() {
	return (
		<section className="top-tag-list">
      <Link to={'/'}><div className="top-tag top-tag-1">HOME</div></Link>
			<div className="top-tag top-tag-2">RESOURCES</div>
			<Link to={'/about'}><div className="top-tag top-tag-2">ABOUT</div></Link>
		</section>
	)
}