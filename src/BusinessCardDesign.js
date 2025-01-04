import React from "react";
import "./BusinessCardDesign.css";

function BusinessCardDesign({ value }) {
  return (
    <div>
      {" "}
      <div className="business2">
        <div className="front">
          <div className="red">
            <div className="head">
              <img
                src="https://raw.githubusercontent.com/MohcineDev/Business-Card/cf4dc2abb23ae9e4ffcb786b7b69bd550cfc3d0a/imgs/x.svg"
                alt="logo"
              />
              <div>
                <h2>{value.business}</h2>
                <p>{value.tagLine}</p>
              </div>
            </div>
          </div>
          <div className="avatar">
            <div className="img">
              <img
                src="https://raw.githubusercontent.com/MohcineDev/Business-Card/main/imgs/man.png"
                alt=""
              />
            </div>
            <p>{value.name}</p>
            <p>{value.occupatiom}</p>
          </div>
          <div className="infos">
            <div>
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 513.64 513.64"
                // style="enable-background:new 0 0 513.64 513.64;"
              >
                <path
                  d="M499.66,376.96l-71.68-71.68c-25.6-25.6-69.12-15.359-79.36,17.92c-7.68,23.041-33.28,35.841-56.32,30.72
                            c-51.2-12.8-120.32-79.36-133.12-133.12c-7.68-23.041,7.68-48.641,30.72-56.32c33.28-10.24,43.52-53.76,17.92-79.36l-71.68-71.68
                            c-20.48-17.92-51.2-17.92-69.12,0l-48.64,48.64c-48.64,51.2,5.12,186.88,125.44,307.2c120.32,120.32,256,176.641,307.2,125.44
                            l48.64-48.64C517.581,425.6,517.581,394.88,499.66,376.96z"
                />
              </svg>
              <div>
                <p>{value.phoneNumber}</p>
                <p>{value.phoneNumber}</p>
              </div>
            </div>
            <div>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 513.64 513.64"
                // style={{ enableBackground: "new 0 0 513.64 513.64" }}
                xmlSpace="preserve"
              >
                <path d="M499.66,376.96l-71.68-71.68c-25.6-25.6-69.12-15.359-79.36,17.92c-7.68,23.041-33.28,35.841-56.32,30.72c-51.2-12.8-120.32-79.36-133.12-133.12c-7.68-23.041,7.68-48.641,30.72-56.32c33.28-10.24,43.52-53.76,17.92-79.36l-71.68-71.68" />
              </svg>

              <div>
                <p>{value.domain}</p>
                <p>{value.domain}</p>
              </div>
            </div>
            <div>
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                // style="enable-background:new 0 0 512 512;"
              >
                <path
                  d="M256,0C161.896,0,85.333,76.563,85.333,170.667c0,28.25,7.063,56.26,20.49,81.104L246.667,506.5
                            c1.875,3.396,5.448,5.5,9.333,5.5s7.458-2.104,9.333-5.5l140.896-254.813c13.375-24.76,20.438-52.771,20.438-81.021
                            C426.667,76.563,350.104,0,256,0z M256,256c-47.052,0-85.333-38.281-85.333-85.333c0-47.052,38.281-85.333,85.333-85.333
                            s85.333,38.281,85.333,85.333C341.333,217.719,303.052,256,256,256z"
                />
              </svg>
              <div>
                <p>{value.address}</p>
                <p>{value.address}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="back">
          <div className="top">
            <div>
              <img
                src="https://raw.githubusercontent.com/MohcineDev/Business-Card/cf4dc2abb23ae9e4ffcb786b7b69bd550cfc3d0a/imgs/x.svg"
                alt=""
              />
              <h2>Business Pro</h2>
              <p>tagline goes here</p>
            </div>
          </div>
          <div className="webicon">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <g id="Layer_7" data-name="Layer 7"></g>
              </svg>
            </div>
          </div>
          <p>www.YOURDOMAIN.com</p>
        </div>
      </div>
    </div>
  );
}

export default BusinessCardDesign;
