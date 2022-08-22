import React from 'react';
import { robots } from './robots';

// Displays each individual card, with a unique name, email, and robot ID.
const Card = ({ name, email, id }) => {
    return (
        <div className='tc bg-light-purple dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='photo' src={`https://robohash.org/${id}?size=200x200`} />
            <div>
                <h2>{ name }</h2>
                <p>{ email }</p>
            </div>
        </div>
    );
}

export default Card;