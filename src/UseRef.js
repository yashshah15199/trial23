import React, { useRef } from "react";

function UseRef() {
  let ref = useRef();
  return (
    <div>
      <label for="fvalue">First Value:</label>
      <input type="text" id="fvalue" name="fvalue" />
      <br />
      <label for="svalue">Second Value:</label>
      <input type="text" id="svalue" name="svalue" ref={ref} />
      <br />
      <label for="tvalue">Third Value:</label>
      <input type="text" id="tvalue" name="tvalue" />
      <br />
      <button onClick={()=>{
        ref.current.disabled = true
      }}>Submit</button>
    </div>
  );
}

export default UseRef;
