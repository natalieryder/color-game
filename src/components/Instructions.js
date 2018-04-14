import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Header = props => (
	<div className="container">
	<div className="pb-4">
		<div className="instructions"><p>Click on each color once. If you click on the same color twice, you lose!</p>
				{props.children}</div>
	</div>
	</div>
);

export default Header;