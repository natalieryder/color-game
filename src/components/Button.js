import React from "react";
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

const styles = {
	getNew: {
		marginTop: '20px',
		float: 'right'
	}
}

const MyButton = props => {
	const { classes } = props;
	return (
		  <Button className={classes.getNew} disabled={props.disabled} variant='raised' color='primary' onClick={props.clicked}>{props.children}</Button>
	)
};

export default withStyles(styles)(MyButton);