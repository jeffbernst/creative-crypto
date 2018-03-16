import React from 'react';

import './nav-bar.css';

export function NavBar() {
	return (
		<nav className="nav-container">
			<div className="nav-content">
				<div className="nav-title">the creative crypto</div>
				<div className="nav-right">
					<div className="steem-price">
						<span className="steem-label">STEEM</span> &and; $ 2.90
					</div>
					<div className="sbd-price">
						<span className="sbd-label">SBD</span> &or; $ 1.05
					</div>
					<div className="question-button">?</div>
				</div>
			</div>
		</nav>
	)
}