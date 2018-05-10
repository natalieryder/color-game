import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Paper from 'material-ui/Paper';
import Grid from "material-ui/Grid";
import { withStyles } from 'material-ui/styles';

const styles = {
  root: {
    backgroundColor: '#ff0000'
  },
  rounded: {
    height: '100px',
    borderRadius: '50%',
    margin: 'auto',
    marginTop: '20px',
    marginBottom: '20px'
  },
  container: {
    marginTop: "10px",
    display: "block"
  }
};

const Squares = props => {
  const { classes } = props;
  return (
  <MuiThemeProvider>
  <Paper className={classes.container}>
  <Grid className={"color-container"} container justify={'center'}>

    {props.colors.map((color, i) => (
      <Grid item xs={4} sm={3} md={2} key={i}>
    		<Paper 
    		style={{backgroundColor: color}} 
    		onClick={() => props.handleCardClick(color)}
        // square={true}
    		className={`color-circle ${props.fadeOut ? "fadeOut" : "fadeIn" }`}
        classes={{rounded: classes.rounded}}/>
      </Grid>
    ))}

  </Grid>
  </Paper>
  </MuiThemeProvider>


)};

// Squares.propTypes = {
//   items: React.PropTypes.array.isRequired,
//   removeItemHandler: React.PropTypes.func.isRequired
// };

export default withStyles(styles)(Squares);