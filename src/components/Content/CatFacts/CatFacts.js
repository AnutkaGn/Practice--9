import React, { useState, useEffect } from 'react';
import CatFact from './CatFact/CatFact';
import getId from '../../../helpers';
import './catFacts.css';

const CatFacts = () => {
    const [facts, setFacts] = useState([]);
    const keys = getId()
    
    const getFacts = () => {
        const url = "https://cat-fact.herokuapp.com/facts/random?amount=3"
        fetch(url)
            .then((response) => response.json())
            .then((result) => {
                setFacts(result)
            })
            .catch((error) => {
                console.error('Error fetching data:', error)
                setFacts([])

            })
    }
    const clearFacts = () => {
        setFacts([]);

      };

    useEffect(() => {
        getFacts()
    }, [])

    return (
        <div className='wrapper_cat_facts'>
            <button onClick={getFacts} className='button_add'>Generate facts</button>
            {facts.map((text)=>(
                <CatFact text={text["text"]} key={keys()}/>
            ))}
            {facts.length > 0 && <button onClick={clearFacts} className='button_clear'>Clear Facts</button>}
        </div>
    );
}

export default CatFacts;
