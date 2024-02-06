import React from 'react'
import Board from './Board'
import {Toaster} from 'react-hot-toast'


function Game() {
  return (
    <div className='game' >
      
    <Toaster/>
        Tic-Tac-Toe
        <Board/>
    </div>
  )
}

export default Game