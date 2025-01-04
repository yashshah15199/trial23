import React from "react";

function ChildCompoenent(props) {
    return (
        <div>
            <h2>Child Component</h2>
            <button onClick={() => props.onButtonClick('Hello, Parent!')}>Click Me</button>
        </div>
    )
}

export default ChildCompoenent