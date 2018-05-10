import React from "react";
import IconButton from 'material-ui/IconButton';
// import FontIcon from 'material-ui/FontIcon';

import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';
import { createMuiTheme } from 'material-ui/styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import Grid from "material-ui/Grid";
import blue from 'material-ui/colors/blue';
import Typography from 'material-ui/Typography';


const theme = createMuiTheme({
  palette: {
    primary: {
    	main:'#333',
    },
  },
})

const Header = props => (
    <MuiThemeProvider theme={theme}>
	<div>
     
       <AppBar position={'static'}>
       	 <Toolbar>
       		<Grid container spacing={8} justify={'space-between'}>
	        	<Grid item>
	        		<Typography variant="title" color="inherit">Round: {props.round}</Typography>
	        	</Grid>
	        	<Grid item>
	        		<Typography variant="title" color="inherit">Score: {props.score}</Typography>
	        	</Grid>
	        	<Grid item>
	        		<Typography variant="title" color="inherit">Highest Round: {props.highestRound}</Typography>
	        	</Grid>
       		</Grid>
       	</Toolbar>
       </AppBar>
    

		{/*<header className="py-3">

			<div className="container">
			<div className="row text-center">
				<div className="col-12 col-md-3">Color Memory Test</div>
				<div className="col-md-3">Clicked this round <br/>{props.score}</div>
				<div className="col-md-3">Round <br/> {props.round}</div>
				<div className="col-md-3">Highest Round Reached <br/>{props.highestRound}</div>
			</div>
			</div>
		</header>*/}
	</div>
	        </MuiThemeProvider>
);

export default Header;