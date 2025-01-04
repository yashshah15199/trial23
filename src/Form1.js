import React, { useState } from "react";

function Form1() {
  const [formData, setFormData] = useState({
    name: "",
    hobbies: "",
    emailAddress: "",
    password: "",
  });

  function clickData(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div class="container mt-5">
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Enter name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter email"
                onChange={(e) =>
                  setFormData({ ...formData, emailAddress: e.target.value })
                }
                required
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="hobbies">Hobbies</label>
              <select
                className="form-control"
                id="hobbies"
                onChange={(e) =>
                  setFormData({ ...formData, hobbies: e.target.value })
                }
              >
                <option value="">Select a hobby</option>
                <option value="Cricket">Cricket</option>
                <option value="Hockey">Hockey</option>
                <option value="Coin Collection">Coin Collection</option>
              </select>
            </div>
          </div>
        </div>

        <div class="form-check mb-3">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="click" class="btn btn-primary btn-block" onClick={clickData}>
          Submit
        </button>
    </div>
  );
}

export default Form1;
