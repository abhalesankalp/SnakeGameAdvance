import "animate.css/animate.css";
import React from "react";

class Snake extends React.Component {
  state = {
    counter: 0,
    leftDist: 0,
    topDist: 0,
    foodLeft: 0,
    foodTop: 0,
    eaten: false,
    direction: [],
    snakePartsCount: 1,
    turnPoints: [],
    ENUM: { leftKey: 1, UpKey: 2, RightKey: 3, DownKey: 4 },
    ENUMDirection: { left: 1, Up: 2, Right: 3, Down: 4 }
  };

  componentDidMount() {
    let ENUM = this.state.ENUM;
    setInterval(() => {
      switch (this.state.direction) {
        case ENUM.leftKey:
          this.setState({
            leftDist: this.state.leftDist - 5
          });
          break;
        case ENUM.UpKey:
          this.setState({
            topDist: this.state.topDist - 5
          });
          break;
        case ENUM.DownKey:
          this.setState({
            topDist: this.state.topDist + 5
          });
          break;
        case ENUM.RightKey:
          this.setState({
            leftDist: this.state.leftDist + 5
          });
          break;
        default:
          break;
      }
    }, 1000);

    let isEaten = this.checkIfEaten();
    if (isEaten) {
      this.createNewFood();
    }

    document.addEventListener("keydown", this._handleKeyDown, false);
  }

  createNewFood() {}

  checkIfEaten() {
    return true;
  }
  _handleKeyDown = e => {
    let ENUM = this.state.ENUM;
    switch (e.keyCode) {
      case 37:
        this.setState({ direction: ENUM.leftKey });
        break;
      case 38:
        this.setState({ direction: ENUM.UpKey });
        break;
      case 39:
        this.setState({ direction: ENUM.RightKey });
        break;
      case 40:
        this.setState({ direction: ENUM.DownKey });
        break;
      default:
        break;
    }
  };

  render() {
    var leftDistOne = this.state.leftDist + "px";
    var topDistOne = this.state.topDist + "px";
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
      left: "80px",
      top: "90px",
      position: "Relative"
    };

    let DivStyle = {
      width: "100%",
      height: "100%"
    };

    return (
      <div onKeyDown={() => console.log("pressed")} style={DivStyle}>
        <div style={snakeStyle} />
        <div style={foodStyle} />
        <div>{this.state.counter}</div>
      </div>
    );
  }
}
export default Snake;
