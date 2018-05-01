import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';


const Squares = props => (
  <MuiThemeProvider>
  <div className="box-container container">

    <RaisedButton label="Default" />
  
  <div className="row justify-content-center">
  


    {props.colors.map((color, i) => (

    	<div className="col-3 mb-4 box" key={i}>
    		<Paper
    		style={{backgroundColor: color}} 
    		onClick={() => props.handleCardClick(color)}
    		className={props.fadeOut ? "fadeOut" : "fadeIn"}
        circle={true}/>
    			

    	</div>
    ))}

  </div>
  </div>
  </MuiThemeProvider>

);

// Squares.propTypes = {
//   items: React.PropTypes.array.isRequired,
//   removeItemHandler: React.PropTypes.func.isRequired
// };

export default Squares;