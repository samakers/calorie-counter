import React, { Component } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core/";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <AppBar>
          <Toolbar>
            <Typography variant="h6">Calorie Counter</Typography>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

export default Navbar;
