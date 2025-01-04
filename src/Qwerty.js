import React, { useEffect } from "react";
import Child from "./Child";

// 1. empty arr ==> only once while comp renders
// 2. without arr ==>
// 3. with arr values

function Qwerty() {
  let [value, setValue] = React.useState("");

  return (
    <div>
      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      />
      <Child value={value}/>
    </div>
  );
}

export default Qwerty;
