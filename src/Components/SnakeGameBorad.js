import React from "react";
import SnakeDiv from "./Snake";
class SnakeGameBoard extends React.Component {
  render() {
    return (
      <div className="GameBoard" onKeyDown={() => console.log("pressed")}>
        <SnakeDiv />
      </div>
    );
  }
}

export default SnakeGameBoard;
