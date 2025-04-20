import React from 'react'

const Score = ({score}) => {
  return (
    <div className='flex flex-col items-center justify-center h-[30vh] w-[80vw]'>
        <h1 className='text-3xl font-bold'>Puntaje:</h1>
        <div className='text-2xl font-bold'>{score}</div>
    </div>
  )
}

export default Score