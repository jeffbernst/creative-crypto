import React from 'react';
import { Link } from 'react-router-dom'

import './tag-list.css';

export function TagList() {
	return (
		<section className="top-tag-list">
      <Link to={'/'}><div className="top-tag top-tag-1">HOME</div></Link>
			<div className="top-tag top-tag-2">RESOURCES</div>
			<div className="top-tag top-tag-2">ABOUT</div>
		</section>
	)
}