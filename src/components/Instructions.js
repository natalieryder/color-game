import React from "react";
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const Instructions = props => (
	  <div className="instructionsContainer">
	  	<Card align={'center'}  spacing={40}>
	  	        <CardContent align={'center'}>
	  	          <Typography component="p" align={"center"}>
	  	            Click on each color once. If you click on the same color twice, you lose! {props.children}
	  	          </Typography>
	  	        </CardContent>
	  	      </Card>
	  </div>
);

export default Instructions;