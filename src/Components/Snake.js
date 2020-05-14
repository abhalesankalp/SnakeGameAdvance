import React from "react";
class SnakePart {
  constructor(left, top, position) {
    this.leftPX = left;
    this.topPX = top;
    this.position = position;
  }
}
class Snake extends React.Component {
  state = {
    counter: 0,
    foodLeft: 60,
    foodTop: 300,
    eaten: false,
    direction: 1,
    snakeParts: [new SnakePart(7, 7, 1)],
    turnPoints: [],
    ENUM: { leftKey: 1, UpKey: 2, RightKey: 3, DownKey: 4 },
    ENUMDirection: { Left: 1, Up: 2, Right: 3, Down: 4 }
  };

  componentDidMount() {
    let ENUM = this.state.ENUM;
    let currentSnakeParts = this.state.snakeParts;
    setInterval(() => {
      currentSnakeParts.forEach(element => {
        switch (element.direction) {
          case ENUM.LeftKey:
            element.leftPX = element.leftPX - 20;
            break;
          case ENUM.UpKey:
            element.topPX = element.topPX - 20;
            break;
          case ENUM.DownKey:
            element.topPX = element.topPX + 20;
            break;
          case ENUM.RightKey:
            element.leftPX = element.leftPX + 20;
            break;
          default:
            break;
        }
      });

      this.setState({ snakeParts: currentSnakeParts });
    }, 500);

    if (this.checkIfEaten()) {
      ////alert("Hi");
    }

    document.addEventListener("keydown", this._handleKeyDown, false);
  }

  createNewFood() {}

  checkIfEaten() {
    console.log(this.state.snakeParts[0]);
    console.log(this.state.foodLeft);
    return (
      this.state.foodLeft === this.state.snakeParts[0].leftPX &&
      this.state.foodTop === this.state.snakeParts[0].topPX
    );
  }
  _handleKeyDown = e => {
    let ENUM = this.state.ENUM;
    let snakePartsCollection = this.state.snakeParts;
    switch (e.keyCode) {
      case 37:
        snakePartsCollection[0].direction = ENUM.LeftKey;
        break;
      case 38:
        snakePartsCollection[0].direction = ENUM.UpKey;
        break;
      case 39:
        snakePartsCollection[0].direction = ENUM.RightKey;
        break;
      case 40:
        snakePartsCollection[0].direction = ENUM.DownKey;
        break;
      default:
        break;
    }
  };

  render() {
    var leftDistOne = this.state.snakeParts[0].leftPX + "px";
    var topDistOne = this.state.snakeParts[0].topPX + "px";
    var leftLocationFood = this.state.foodLeft + "px";
    var topLocationFood = this.state.foodTop + "px";
    let snakeStyle = {
      width: "20px",
      height: "20px",
      backgroundColor: "red",
      border: "1px ridge yellow",
      borderRadius: "50%",
      left: leftDistOne,
      top: topDistOne,
      position: "Relative"
    };

    let foodStyle = {
      width: "20px",
      height: "20px",
      backgroundColor: "green",
      border: "1px ridge yellow",
      borderRadius: "50%",
      left: leftLocationFood,
      top: topLocationFood,
      position: "Relative"
    };

    let DivStyle = {
      width: "100%",
      height: "100%"
    };

    return (
      <div style={DivStyle}>
        <div style={snakeStyle} />
        <div style={foodStyle} />
        <div>{this.state.counter}</div>
      </div>
    );
  }
}
export default Snake;
