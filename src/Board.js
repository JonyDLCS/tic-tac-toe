import React, { useEffect, useState } from 'react';
import Square from './Square';
import toast, {Toaster} from 'react-hot-toast';


function Board() {
    const initialSquares = Array(9).fill(null);
    const [squares, setSquares] = useState(initialSquares);
    const [xIsNext, setXIsNext] = useState(true);
    
    
    const handleClickEvent = (i) =>{
        const newSquares = [...squares];
        const winnerDeclared = Boolean(calculateWinner(newSquares))
        const squareFilled = Boolean(newSquares[i]);
        
        if (winnerDeclared || squareFilled){
            
            return
        }
        
        newSquares[i] = xIsNext?'X':'O';
        setSquares(newSquares);
        setXIsNext(!xIsNext);
    }

    const renderSquare = (i) =>{
        let classLines = '';
        if([0,1,2].includes(i)){
            classLines += ' no-top-border '
        }

        if([0,3,6].includes(i)){
            classLines += ' no-left-border '
        }

        if([2,5,8].includes(i)){
            classLines += ' no-right-border '
        }

        if([6,7,8].includes(i)){
            classLines += ' no-bottom-border '
        }


        return(
            <Square classLines={classLines} value={squares[i]} 
            onClickEvent = {()=> {handleClickEvent(i)}}/>
        )
    }
    const winner = calculateWinner(squares);

    useEffect(()=>{
        if (winner) {
            toast(`Winner: ${winner}`,{
                duration:2000,
                icon:'🎉',
            })
        }
        
    }, [winner])
    
    const status = winner?
    `Winner: ${winner}`:
    `Next player: ${xIsNext? 'X':'O'}`;
    
  return (
    <>
    <div>
        <div className='status'>{status}</div>
        <div className='board-row'>
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
        </div>
        <div className='board-row'>
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
        </div>
        <div className='board-row'>
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        </div>
    </div>
    </>
  )
}

function calculateWinner(squares){
    const lines = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ]

    for (let line of lines){
        const [a,b,c] = line;

        if(squares[a] && squares[a] === squares[b] && squares[a] ===squares[c])
            return squares[a];
    }

    return null;
}

export default Board