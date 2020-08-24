import React from "react";

class GameContainer extends React.Component {
  state = {
    currentDeckID: ""
  };

  getDeck = () => {
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then((response) => response.json())
      .then((createdDeck) => {
        const deck_id = createdDeck.deck_id;
        console.log(deck_id)
        this.setState({currentDeckID: deck_id})
      })
  };

  render() {
    return (
      <div className="gameContainer">
        <p>Cards Go Here</p>
        <button onClick={this.getDeck}>Get Card</button>
      </div>
    );
  }
}

export default GameContainer;
