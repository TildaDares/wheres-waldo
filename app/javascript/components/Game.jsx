import React from "react";

const Game = (props) => {
  const pic = props.pic;

  return (
    <div>
      <img src={pic.src} className="game-img" />
    </div>
  );
};

export default Game;
