import React from "react";

class SnakePart {
  constructor(left, top, direction) {
    this.leftPX = left;
    this.topPX = top;
    this.direction = direction;
  }
}

class Snake extends React.Component {
  state = {
    foodLeft: 40,
    foodTop: 380,
    eaten: false,
    direction: 1,
    snakeParts: [],
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
          case ENUM.leftKey:
            element.leftPX = element.leftPX - 5;
            break;
          case ENUM.UpKey:
            element.topPX = element.topPX - 5;
            break;
          case ENUM.DownKey:
            element.topPX = element.topPX + 5;
            break;
          case ENUM.RightKey:
            element.leftPX = element.leftPX + 5;
            break;
          default:
            break;
        }
      });

      this.setState({ snakeParts: currentSnakeParts });

      if (this.checkIfEaten()) {
        this.createNewFood();
      }
    }, 500);

    document.addEventListener("keydown", this._handleKeyDown, false);
  }

  createNewFood() {
    this.setState({ foodLeft: Math.floor(Math.random() * 101) });
    this.setState({ foodTop: Math.floor(Math.random() * 101) });
  }

  checkIfEaten() {
    return (
      this.state.foodLeft + 25 >= this.state.snakeParts[0].leftPX &&
      this.state.foodLeft - 5 <= this.state.snakeParts[0].leftPX &&
      this.state.foodTop + 25 >= this.state.snakeParts[0].topPX &&
      this.state.foodTop - 5 <= this.state.snakeParts[0].topPX
    );
  }

  GetSnake = () => {
    var allSnakeParts = this.state.snakeParts;
    var result = allSnakeParts.map(element => {
      let snakeStyle = {
        width: "20px",
        height: "20px",
        backgroundColor: "red",
        border: "1px ridge yellow",
        borderRadius: "50%",
        left: element.leftPX,
        top: element.topPX,
        position: "Relative"
      };

      return (
        <div>
          <div style={snakeStyle} />
        </div>
      );
    });

    return result;
  };

  _handleKeyDown = e => {
    let ENUMDirection = this.state.ENUMDirection;
    let snakePartsCollection = this.state.snakeParts;
    let turnPoints = this.state.turnPoints;
    let part = new SnakePart(
      this.state.snakeParts[0].leftPX,
      this.state.snakeParts[0].topPX
    );

    switch (e.keyCode) {
      case 37:
        part.direction = ENUMDirection.Left;
        turnPoints.push(part);
        snakePartsCollection[0].direction = ENUMDirection.Left;
        break;
      case 38:
        part.direction = ENUMDirection.Up;
        turnPoints.push(part);
        snakePartsCollection[0].direction = ENUMDirection.Up;
        break;
      case 39:
        part.direction = ENUMDirection.Right;
        turnPoints.push(part);
        snakePartsCollection[0].direction = ENUMDirection.Right;
        break;
      case 40:
        part.direction = ENUMDirection.Down;
        turnPoints.push(part);
        snakePartsCollection[0].direction = ENUMDirection.Down;
        break;
      default:
        break;
    }
  };

  render() {
    var leftLocationFood = this.state.foodLeft + "px";
    var topLocationFood = this.state.foodTop + "px";

    if (this.state.snakeParts.length == 0) {
      this.state.snakeParts.push(new SnakePart(1, 1, 3));
    }

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
        <this.GetSnake />
        <div style={foodStyle} />
      </div>
    );
  }
}

export default Snake;
