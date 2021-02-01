import React, { useState, useEffect } from 'react';
import TinderCard from "react-tinder-card";
import './SwipingCards.css';



function SwipingCards() {
    const [people, setPeople] = useState([
        {
            name: 'Kacper, 18',
            url: 'https://allaboutstevejobs.com/resources/img/pics/1976-01-01_00030.jpg'
        },
        {
            name: 'Piotr, 21',
            url: 'https://i.insider.com/52f3fdaeeab8ea35176ea827?width=750&format=jpeg&auto=webp'
        }
    ]);



    return (
        <div>


            <div className="swipingCards__cardContainer">

            
                {people.map((person) => (
                    <SwipingCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}
                     >
                        <div 
                            style={{ backgroundImage: `url(${person.url})`}}
                            className="card"
                        >
                            <h1>{person.name}</h1>
                        </div>
                    </SwipingCard>
                ))}
            </div>
        </div>
    );
}

export default SwipingCards
