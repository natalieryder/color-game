import React from "react";

const Header = props => (
	<div>
		<header className="py-3">
			<div className="container">
			<div className="row">
				<div className="col-4">Color Memory Test</div>
				<div className="col-4">Score {props.score}</div>
				<div className="col-4">Round: {props.round}</div>
			</div>
			</div>
		</header>
	</div>
);

export default Header;