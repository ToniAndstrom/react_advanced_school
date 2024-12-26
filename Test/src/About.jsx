import React from "react"
//React.Fragments are same as <></>
const About = (props) => {
    return(
        <React.Fragment>
        <div>About here</div>
        <div>{props.someString}</div>
        </React.Fragment>
    );
};
export {About};