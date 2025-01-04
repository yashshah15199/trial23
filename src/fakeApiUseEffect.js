import React, { useState, useEffect } from "react";
import axios from "axios";

function FakeApiUseEffect() {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(true);
const [loading, setLoading] = useState(false)

  const url = "https://fakestoreapi.com/products";
  useEffect(() => {
    setLoading(true)
    axios
      .get(url)
      .then((response) => {
        console.log(response);
        setData(response.data);
        setLoading(false)
      })
      .catch((err) => {});
  }, [toggle]);

  function Refresh() {
    setToggle(!toggle)
  }

  return (
    <div>
      <button style={{ backgroundColor: "red" }} onClick={Refresh}> Refresh</button>
      {loading ? (<div>loading.....</div>) : (<div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {data.map((val) => {
          return (
            <div
              className="flex"
              style={{
                border: "2px solid black",
                width: "400px",
                borderRadius: "10px",
              }}
            >
              <img style={{}} src={val.image} width="390" height="250"></img>
              <img></img>
              <b>title: </b>
              {val.title}
              <br />
              <b>rating: </b>
              {val.rating.rate}
              <br />
              <b>description: </b>
              {val.description}
            </div>
          );
        })}
      </div>)}
      
    </div>
  );
}

export default FakeApiUseEffect;
