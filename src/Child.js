import React, { useEffect } from "react";

function Child({value}) {
  useEffect(() => {
    return () => {
      console.log("asljdjh");
    };
  }, []);

  return <div>Child {value}</div>;
}

export default React.memo(Child);
