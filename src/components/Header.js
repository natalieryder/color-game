import React from "react";

const Header = props => (
	<div>
		<header className="py-3">
			<div className="container">
			<div className="row text-center">
				<div className="col-12 col-md-3">Color Memory Test</div>
				<div className="col-md-3">Clicked this round <br/>{props.score}</div>
				<div className="col-md-3">Round <br/> {props.round}</div>
				<div className="col-md-3">Highest Round Reached <br/>{props.highestRound}</div>
			</div>
			</div>
		</header>
	</div>
);

export default Header;