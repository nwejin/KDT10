import Board from './Board';

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>상태</div>
        <ol>상태</ol>
      </div>
    </div>
  );
}

export default Game;
