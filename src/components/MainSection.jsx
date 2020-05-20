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

    //Filter through JSON file from user input *ADD TO output component to keep it seperate?!*
    const foodOutput = FoodData.map((food) => {
      //Log to show data is being returned
      if (this.state.text === food.Display_Name) {
        return console.log(
          "You have selected: " +
            food.Display_Name +
            ". There are " +
            food.Calories +
            " calories in a " +
            food.Portion_Amount +
            " portion."
        );
      }
    });

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
        <FoodPreview />
      </React.Fragment>
    );
  }
}

export default MainSection;
