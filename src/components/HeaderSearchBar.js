import React from 'react';
import '../css/Header.css';

function HeaderSearchBar() {
	return (
		<div>
			<input
			  type="text"
				className="header-search-bar-input"
				placeholder="O que você está procurando?"
			/>			
		</div>
	)
}

export default HeaderSearchBar;
