import React from 'react'

const Card = ({card,validateCards,isFlipped}) => {
    const handleClickCard = () => {
        if(!isFlipped){
            validateCards(card);
        }
    }
  return (
    <div onClick={handleClickCard} className='card w-[150px] h-[150px] bg-transparent cursor-pointer'>
        <div className={`relative preserve-3d w-full h-full duration-1000 ${isFlipped? 'my-rotate-y180': ''}`}>
            <div className="absolute w-full h-full">
                <img src={card.src} alt="" />
            </div>
            <div className="absolute backface-hidden w-full h-full bg-black">
            </div>
        </div>
    </div>
  )
}

export default Card