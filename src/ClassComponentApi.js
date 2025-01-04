import React, { Component } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export class ClassComponentApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
      state1: "",
    };
  }

  componentDidMount() {
    console.log("ds");
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response);
        this.setState((this.state.arr = response.data));
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });

    console.log(this.state.arr);
  }

  componentWillUnmount() {
    console.log("unmount");
  }


  onChange = (e) => {
    this.setState((prev) => (prev = e.target.value));
    console.log("Sads")
  };

  render() {
    {
      return this.state.arr.length > 0 ? (
        <div>
          <input onChange={this.onChange}></input>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat&nbsp;(g)</TableCell>
                  <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.arr.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="right">{row.title}</TableCell>
                    <TableCell align="right">{row.description}</TableCell>
                    <TableCell align="right">{row.category}</TableCell>
                    <TableCell align="right">{row.rating.rate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      ) : (
        <div>
          <h6>isLoading</h6>
        </div>
      );
    }
  }
}

export default ClassComponentApi;
