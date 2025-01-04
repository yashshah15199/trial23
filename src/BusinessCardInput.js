import React, { useState } from "react";
import BusinessCardDesign from "./BusinessCardDesign";

function BusinessCardInput() {
  const [value, setValue] = useState({
    business: "",
    tagLine: "",
    name: "",
    occupatiom: "",
    phoneNumber: "",
    domain: "",
    address: "",
  });


  return (
    <div>
      <div className="d-flex">
        <div style={{width:'50%'}}>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Business Name:
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Business Name"
              onChange={(e) => setValue({ ...value, business: e.target.value })}
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Tag Line:
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Tag Line"
              onChange={(e) => setValue({ ...value, tagLine: e.target.value })}
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Name:
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Name"
              onChange={(e) => setValue({ ...value, name: e.target.value })}
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Occupation:
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Occupation"
              onChange={(e) =>
                setValue({ ...value, occupatiom: e.target.value })
              }
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Phone Number:
            </label>
            <input
              type="number"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Phone Number:"
              onChange={(e) =>
                setValue({ ...value, phoneNumber: e.target.value })
              }
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Domain:
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Domain Address:"
              onChange={(e) => setValue({ ...value, domain: e.target.value })}
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Address:
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Address:"
              onChange={(e) => setValue({ ...value, address: e.target.value })}
            />
          </div>
        </div>
        <div style={{width:'50%'}}>
              <BusinessCardDesign value={value}></BusinessCardDesign>
        </div>
      </div>
    </div>
  );
}

export default BusinessCardInput;
