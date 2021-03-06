import React from "react";
import HigherOrLower from "./game_mechanics";
class GameContainer extends React.Component {
  state = {
    currentDeckID: "",
    currentCard: {},
    nextCard: {},
    isCard: false,
    score: 0,
    lives: 3,
    userName: "",
    clicked: false,
    scoreBoard: [],
  };

  handleChange = (changeEvent) => {
    const userName = changeEvent.target.value;
    this.setState((currentState) => {
      currentState.userName = userName;
      return currentState;
    });
  };

  inputUserName = (event) => {
    console.dir(this.state.userName);
    this.setState((currentState) => {
      currentState.clicked = true;
      return currentState;
    });
    event.preventDefault();
  };

  getDeck = () => {
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then((response) => response.json())
      .then((createdDeck) => {
        const currentDeckID = createdDeck.deck_id;
        this.setState({ currentDeckID: currentDeckID });
      });
  };

  deck = () => {
    return fetch(
      `https://deckofcardsapi.com/api/deck/${this.state.currentDeckID}/draw/?count=1`
    )
      .then((response) => response.json())
      .then((data) => data.cards[0]);
  };

  drawCard = () => {
    this.deck().then((currentCard) => {
      this.setState({ currentCard: currentCard, isCard: true });
    });
  };

  userSelect = (event) => {
    const buttonClicked = event.target.innerText;

    this.deck()
      .then((nextCard) => {
        this.setState({ nextCard: nextCard, isCard: true });
      })
      .then(() => {
        let cardOne = this.state.currentCard.value;
        let cardTwo = this.state.nextCard.value;

        if (cardOne === "JACK") {
          cardOne = 11;
        } else if (cardOne === "QUEEN") {
          cardOne = 12;
        } else if (cardOne === "KING") {
          cardOne = 13;
        } else if (cardOne === "ACE") {
          cardOne = 14;
        }

        if (cardTwo === "JACK") {
          cardTwo = 11;
        } else if (cardTwo === "QUEEN") {
          cardTwo = 12;
        } else if (cardTwo === "KING") {
          cardTwo = 13;
        } else if (cardTwo === "ACE") {
          cardTwo = 14;
        }

        cardOne = parseInt(cardOne);
        cardTwo = parseInt(cardTwo);

        if (buttonClicked === "Higher") {
          this.setState((currentState) => {
            if (cardOne < cardTwo) {
              currentState.score += 0.5;
            } else {
              console.log(currentState.lives);
              currentState.lives -= 0.5;
              console.log(currentState.lives);
            }
            currentState.currentCard = currentState.nextCard;
            return currentState;
          });
        } else {
          this.setState((currentState) => {
            if (cardOne > cardTwo) {
              currentState.score += 0.5;
            } else {
              currentState.lives -= 0.5;
            }
            currentState.currentCard = currentState.nextCard;
            return currentState;
          });
        }
      });
  };

  playAgain = () => {
    this.getDeck();

    this.setState((currentState) => {
      const results = {
        userName: currentState.userName,
        score: currentState.score,
      };

      return {
        clicked: false,
        scoreBoard: [...currentState.scoreBoard, results],
        score: 0,
        lives: 3,
      };
    });
  };

  componentDidMount() {
    console.log("mounted");
    this.getDeck();
  }

  render() {
    return (
      <main className="gameContainer">
        {this.state.clicked && (
          <div className="cardGame">
            <img
              id="cardimage"
              src={this.state.currentCard.image}
              alt={this.currentCard}
            />

            <br />
            <br />
            {this.state.lives > 0 && (
              <div className="game">
                <div className="gameMechanics">
                  <button
                    onClick={this.drawCard}
                    id="drawButton"
                    className="button"
                  >
                    Draw Card
                  </button>
                  <div className="buttonContainer">
                    <button
                      onClick={this.userSelect}
                      id="higher"
                      className="button"
                    >
                      Higher
                    </button>
                    <button onClick={this.userSelect} className="button">
                      Lower
                    </button>
                  </div>
                  <table className="scoreboard">
                    <tbody>
                      <th id="username">Username</th>
                      <th id="score1">Score</th>
                    </tbody>
                    {this.state.scoreBoard.map((user) => {
                      return (
                        <tbody>
                          <td>{user.userName}</td>
                          <td>{user.score}</td>
                        </tbody>
                      );
                    })}
                  </table>
                  <h2 id="lives">Current Lives: {this.state.lives}</h2>
                  <h2 id="score">Score: {this.state.score}</h2>
                </div>
              </div>
            )}
            {this.state.lives === 0 && (
              <div className="gameOver">
                <h2>
                  {this.state.userName}, you lost with {this.state.score}{" "}
                  points.
                </h2>
                <h2 id="end_game">Game Over!</h2>
                <button className="button" onClick={this.playAgain}>
                  Play Again?
                </button>
              </div>
            )}
          </div>
        )}

        {!this.state.clicked && (
          <div className="userInput">
            <img
              src="http://www.pngmart.com/files/8/Cards-PNG-Transparent-Image.png"
              alt="Card Image"
              className="cardImg"
            />
            <form action="">
              <h3>Enter your username below:</h3>
              <input
                onChange={this.handleChange}
                type="text"
                className="input"
              />
              <br />
              <br />

              <button onClick={this.inputUserName} className="button">
                Submit
              </button>
            </form>
          </div>
        )}
      </main>
    );
  }
}

export default GameContainer;
