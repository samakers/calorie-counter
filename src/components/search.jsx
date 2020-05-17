import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class Search extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <TextField id="standard-basic" label="Search food" />
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: "22px" }}
        >
          Search
        </Button>
        <Button
          variant="contained"
          color="secondary"
          style={{ marginLeft: "22px" }}
        >
          Clear
        </Button>
      </React.Fragment>
    );
  }
}

export default Search;
