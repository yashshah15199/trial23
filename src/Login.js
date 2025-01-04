import React from "react";

function Login(props) {
  const handleClick = () => {
    //sdfsdf
    props.gotoRegister();
  };
  return (
    <div>
      Login
      <button onClick={handleClick}>Go to Register</button>
    </div>
  );
}

export default Login;
