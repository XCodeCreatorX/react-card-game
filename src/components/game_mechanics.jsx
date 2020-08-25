// import React from "react";

// const HigherOrLower = (props) => {
//   const userSelect = (event) => {
//     const buttonClicked = event.target.innerText;
//     console.log(props);
//   };

//   //   this.deck()
//   //     .then((nextCard) => {
//   //       this.setState({ nextCard: nextCard, isCard: true });
//   //     })
//   //     .then(() => {
//   //       let cardOne = this.state.currentCard.value;
//   //       let cardTwo = this.state.nextCard.value;

//   //       if (cardOne === "JACK") {
//   //         cardOne = 11;
//   //       } else if (cardOne === "QUEEN") {
//   //         cardOne = 12;
//   //       } else if (cardOne === "KING") {
//   //         cardOne = 13;
//   //       } else if (cardOne === "ACE") {
//   //         cardOne = 14;
//   //       }

//   //       if (cardTwo === "JACK") {
//   //         cardTwo = 11;
//   //       } else if (cardTwo === "QUEEN") {
//   //         cardTwo = 12;
//   //       } else if (cardTwo === "KING") {
//   //         cardTwo = 13;
//   //       } else if (cardTwo === "ACE") {
//   //         cardTwo = 14;
//   //       }

//   //       cardOne = parseInt(cardOne);
//   //       cardTwo = parseInt(cardTwo);

//   //       if (buttonClicked === "Higher") {
//   //         this.setState((currentState) => {
//   //           if (cardOne < cardTwo) {
//   //             currentState.score += 0.5;
//   //           } else {
//   //             console.log(currentState.lives);
//   //             currentState.lives -= 0.5;
//   //             console.log(currentState.lives);
//   //           }
//   //           currentState.currentCard = currentState.nextCard;
//   //           return currentState;
//   //         });
//   //       } else {
//   //         this.setState((currentState) => {
//   //           if (cardOne > cardTwo) {
//   //             currentState.score += 0.5;
//   //           } else {
//   //             currentState.lives -= 0.5;
//   //           }
//   //           currentState.currentCard = currentState.nextCard;
//   //           return currentState;
//   //         });
//   //       }
//   //     });
//   // };

//   return (
//     <div className="buttonContainer">
//       {/* <button onClick={this.userSelect} id="higher" className="button">
//          Higher
//       </button> */}
//       <button onClick={userSelect} className="button">
//         Lower
//       </button>
//     </div>
//   );
// };

// export default HigherOrLower;
