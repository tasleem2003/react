import { useState } from "react";

const initialBoard = () => Array(9).fill(null);
const useTictactoe = () => {
    const [board,setBoard] = useState(initialBoard());
    const [isXNext,setIsNext] = useState(true);


     const WINNER_PATTERNS =[
        [0,1,3],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
     ];
     const calculateWinner = (currentBoard) => {
        for (let i=0; i< WINNER_PATTERNS.length;i++){
            
            const [a,b,c] = WINNER_PATTERNS[i];
            if(
                currentBoard[a] && 
                currentBoard[a] === currentBoard[b] && 
                currentBoard[a] === currentBoard[c]
            ){
                return currentBoard[a];
            }
        }
        return null;
     };
     const handleClick = (index) => {
        const Winner = calculateWinner(board);
       
        if (Winner || board[index]) return;

        const newBoard =[...board];
        newBoard[index]= isXNext ? "X" : "O";
        setBoard(newBoard);
        setIsNext(!isXNext)
     };
     const getStatusMessage = () => {
        const winner = calculateWinner(board)
        if(winner) return `Player ${winner} wins!`;
        if (!board.includes(null)) return `it's a draw!`;
        return `player ${isXNext ? "X" : "O"} turn`;
     };
     const resetGame = () => {
        setBoard(initialBoard());
        setIsNext(true);
      };
     return {board,handleClick,calculateWinner,getStatusMessage,resetGame}
};

export default useTictactoe;