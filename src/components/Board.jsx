import React, { useEffect } from 'react'
import { useState } from 'react'
import cardsData from '../cardsData.json'
import Card from './Card'

const Board = () => {
    const [mixCards, setMixCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]); 

    useEffect(() => {
        setMixCards(cardsData.map(card => ({ ...card, isFlipped: false})).sort(() => Math.random() - 0.5));
    }, []);

    const validateCards = (currentCard) => {
        if(flippedCards.includes(currentCard.id)){
            return
        }
        setFlippedCards(state=> [...state, currentCard.id]);
    }

    return (
        <div className='grid grid-cols-4 grid-rows-4 gap-4 place-items-center h-[70vh] w-[80vw]'>
            {
                mixCards.map(card => {
                    return  <Card
                    key={card.id}
                    card={card}
                    validateCards={validateCards}
                    isFlipped={flippedCards.includes(card.id)}
                    />
                })
            }
        </div>
    )
}

export default Board