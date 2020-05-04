import React from 'react';

import Nav from './Nav';
import SearchForm from './SearchForm';

const Header = (props) => {
	return (
		<div>
			<SearchForm newSearch={props.search} />
			<Nav />
		</div>
	)
};

export default Header;