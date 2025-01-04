import React, { Component } from "react";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import {
  FormControlLabel,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import TextField from "@mui/material/TextField";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      sport: "",
      hobby: [],
    };
  }

  handleChange = (e) => {
    if (e.target.type == "checkbox") {
      let arr = this.state[e.target.name];
      if (arr.includes(e.target.value)) {
        arr.splice(arr.indexOf(e.target.value), 1);
      } else {
        arr.push(e.target.value);
      }
      this.setState({ ...this.state, [e.target.name]: arr });
    } else {
      this.setState({ ...this.state, [e.target.name]: e.target.value });
    }
  };

  render() {
    return (
      <div>
        <div>
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <h6>Gender</h6>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="gender"
            style={{ display: "flex", justifyContent: "center" }}
            onChange={this.handleChange}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </div>
        <div>
          <h6>Hobbies</h6>
          <Checkbox
            {...label}
            name="hobby"
            onChange={this.handleChange}
            value={"Cricket"}
            checked={this.state.hobby.includes("Cricket")}
          />
          Cricket
          <Checkbox
            {...label}
            name="hobby"
            onChange={this.handleChange}
            value={"CoinCollection"}
            checked={this.state.hobby.includes("CoinCollection")}
          />
          Coin Collection
          <Checkbox
            {...label}
            name="hobby"
            onChange={this.handleChange}
            value={"NoteCollection"}
            checked={this.state.hobby.includes("NoteCollection")}
          />
          Note Collection
          <Checkbox
            {...label}
            name="hobby"
            onChange={this.handleChange}
            value={"StampCollection"}
            checked={this.state.hobby.includes("StampCollection")}
          />
          Stamp Collection
        </div>
        <div>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Sport</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={this.state.sport}
              label="Sport"
              //   onChange={handleChange}
              name="sport"
              onChange={this.handleChange}
            >
              <MenuItem value={"Cricket"}>Cricket</MenuItem>
              <MenuItem value={"Football"}>Football</MenuItem>
              <MenuItem value={"Volleyball"}>Volleyball</MenuItem>
            </Select>
          </FormControl>
        </div>
        <button
          onClick={() => {
            console.log(this.state);
          }}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default ClassComponent;
