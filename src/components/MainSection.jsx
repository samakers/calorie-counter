import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FoodData from "../data/food.json";
import FoodPreview from "./FoodItem";

class MainSection extends Component {
  state = {
    text: "",
  };
  render() {
    //Styling
    const searchStyle = {
      marginLeft: "22px",
      marginTop: "200px",
    };

    const displayFood = FoodData.map((element) => {
      // console.log(element.Display_Name);
      return <FoodPreview foodName={element.Display_Name} />;
    });

    console.log(displayFood);

    return (
      <React.Fragment>
        <TextField
          id="standard-basic"
          label="Search food"
          style={searchStyle}
          onChange={(e) => this.setState({ text: e.target.value })}
        />
        <Button variant="contained" color="primary" style={searchStyle}>
          Search
        </Button>
        <Button variant="contained" color="secondary" style={searchStyle}>
          Clear
        </Button>
        {/* Pass the array in as props to FoodPreview component */}
        <FoodPreview foodName={displayFood} />
      </React.Fragment>
    );
  }
}

export default MainSection;
