
import useTictactoe from './Hooks/Usetictactoe'



const Tictactoe = () => {
 const {board,handleClick,calculateWinner,resetGame,getStatusMessage} = useTictactoe();
  return (
    
      <div className="game">
        <div className="status">{getStatusMessage()}
          <button className="reset-button" onClick={resetGame}> 
            Reset Game</button>
        </div>

        <div className="board">
          {board.map((b,index) => {
            return <button className="cell " key={index} onClick={() => handleClick(index)}  disabled={b !== null}>
              {b}
            </button>
          })} ;

        </div>
      </div>
    
        );
      }

export default Tictactoe
