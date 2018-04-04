import React from "react";

const Squares = props => (
  <div className="box-container container">
  <div className="row justify-content-center">
    {props.colors.map((color, i) => (

    	<div className="col-3 mb-4 box" key={i} onClick={() => props.handleCardClick(color)}>
    		<div style={{backgroundColor: color}}>
    			
    		</div>
    	</div>
    ))}
  </div>
  </div>
);

export default Squares;