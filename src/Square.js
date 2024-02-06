import React, { useState } from 'react'


function Square(props) {
  let clicked = '';
  if (props.value === 'X') {
    clicked = 'text-blue not-clickable'
  }else if (props.value === 'O') {
    clicked = 'text-red not-clickable'
  }
  return (
    

    <button 

        className={`square ${clicked} ${props.classLines}`}
        onClick={props.onClickEvent}
    >
        {props.value}
    </button>
  )
}

export default Square