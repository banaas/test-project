import React from 'react';
import { robots } from './robots';

const Card = () => {
    return (
        <div className='bg-light-purple dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={'https://robohash.org/${this.props.id}?200x200'} alt='photo'/>
            <div>
                <h2>name</h2>
                <p>props.email</p>
            </div>
        </div>
    );
}

export default Card;