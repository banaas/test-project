import React from "react";
import Card from "./Card"

const CardList = ({ robots }) => {

/* Created a map of the Card List to implement all names in the robots.js
API */
        return (
            <div>
                {robots.map((user, i) => {
            return <Card 
                key={i} 
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email}/>
             })}
            </div>
         );
}

export default CardList;