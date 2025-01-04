import React from 'react'
import BusinessCardDesign from './BusinessCardDesign';
import BusinessCardInput from './BusinessCardInput';

function BusinessCard() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Business Card Generator</a>
    </div>
  </nav>
  <div>
  <BusinessCardInput/>
  {/* <BusinessCardDesign/> */}
  </div>
  </div>
  )
}

export default BusinessCard