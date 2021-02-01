import React, { useState, useEffect } from 'react';
import TinderCard from "react-tinder-card";
import database from './firebase'
import './TinderCards.css';



function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Kacper, 13',
            url: 'https://allaboutstevejobs.com/resources/img/pics/1976-01-01_00030.jpg'
        },
        {
            name: 'Pjotr, 21',
            url: 'https://i.insider.com/52f3fdaeeab8ea35176ea827?width=750&format=jpeg&auto=webp'
        }
    ]);
    // const people = [];

    useEffect(() => {
        const unsubscribe = database
            .collection('people')
            .onSnapshot((snapshot) => setPeople(snapshot.docs.map((doc) => doc.data()))
            );
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <div>


            <div className="tinderCards__cardContainer">

            
                {people.map((person) => (
                    <TinderCard
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
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}

export default TinderCards
