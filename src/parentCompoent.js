import React from "react";
import ChildCompoenent from "./ChildCompoenet";

function ParentComponent() {
    const handleSubmit = (name) => {
        //kgkj
        console.log(`Button Clicked ${name}`)
    }

    return (<div><h1>Hello</h1>
        <ChildCompoenent onButtonClick={handleSubmit}></ChildCompoenent>
    </div>)
}

export default ParentComponent