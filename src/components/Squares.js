import React from "react";


const Squares = props => (
  <div className="box-container container">
  <div className="row justify-content-center">

    {props.colors.map((color, i) => (

    	<div className="col-3 mb-4 box" key={i}>
    		<div style={{backgroundColor: color}} onClick={() => props.handleCardClick(color)}>
    			
    		</div>
    	</div>
    ))}

  </div>
  </div>

);

// Squares.propTypes = {
//   items: React.PropTypes.array.isRequired,
//   removeItemHandler: React.PropTypes.func.isRequired
// };

export default Squares;