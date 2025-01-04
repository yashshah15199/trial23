import React from "react";
import Login from "./Login";
import Register from "./Register";
function App() {
  const [isLogin, setIsLogin] = React.useState(true);

  const gotoLogin =()=>{
    setIsLogin(true)
  }
  const gotoRegister =()=>{
    setIsLogin(false)
  }

  return (
    <div>
      App
      {isLogin ? <Login gotoRegister={gotoRegister}/> : <Register gotoLogin={gotoLogin}/>}
    </div>
  );
}

export default App;
