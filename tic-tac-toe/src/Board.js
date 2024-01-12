import React from 'react';
import Square from './Square';

// board에서 i값을 square로 보내야함.

class Board extends React.Component {
  state = {
    squares: Array(9).fill(null),
    xIsNext: true,
  };

  handleClick = (i) => {
    const squares = [...this.state.squares];
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({ squares });
  };

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick[i]}
      />
    );
  }

  render() {
    const status = 'Next Player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
