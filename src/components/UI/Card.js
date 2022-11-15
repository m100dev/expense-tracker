import React from 'react';
import './Card';

//This card component serves as our custom wrapper
function Card(props) {
    /* We create this classes variable in order to use the css class that we receive 
       from this component's css file, and also concatenate the class that we receive 
       from outside the component as a prop.
    */

    const classes = 'card ' + props.className;

    // props.children is the content that this compenent wraps
    return <div className={classes}>{props.children}</div>;
};

export default Card;