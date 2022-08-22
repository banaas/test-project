import React from "react";

/* Borders the SearchBox and Cards to make the Robofriends scrollable, while
using CardList as a child variable to implement the the Scroll function */
const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '5px solid black', height: '800px'}}>
            { props.children } 
        </div>
    )
}

export default Scroll;