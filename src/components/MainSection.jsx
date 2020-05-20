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
      if (this.state.text.length !== 0) {
        if (element.Display_Name.startsWith(this.state.text)) {
          return (
            <FoodPreview
              foodName={element.Display_Name}
              foodCalories={element.Calories}
              foodPortion={element.Portion_Display_Name}
            />
          );
        }
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
        <Button
          variant="contained"
          color="secondary"
          style={searchStyle}
          onClick={(e) => this.setState({ text: "" })}
        >
          Clear
        </Button>
        {displayFood}
      </React.Fragment>
    );
  }
}

export default MainSection;
