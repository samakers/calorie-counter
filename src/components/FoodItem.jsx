import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";

const style = {
  Paper: { padding: 20, margin: 10, marginTop: 40 },
};

class FoodPreview extends Component {
  state = {};
  render() {
    return (
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item md>
          <Paper style={style.Paper}>{this.props.foodName}</Paper>
        </Grid>
      </Grid>
    );
  }
}

export default FoodPreview;
