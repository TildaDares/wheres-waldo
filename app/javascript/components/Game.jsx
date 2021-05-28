import React from "react";
import { Link } from "react-router-dom";

const Game = (props) => {
  const pic = props.pic;

  const getCharacterImages = () => {
    const image = [];
    let i = 0;
    console.log(pic);
    for (const img in pic.characters) {
      image.push(
        <img src={pic.characters[img]} key={i} className="character" />
      );
      i += 1;
    }

    return image;
  };

  return (
    <div className="game-container">
      <div className="characters-container">
        <div>{getCharacterImages()}</div>
        <Link to="/" className="btn btn-danger give-up">
          Give Up
        </Link>
      </div>
      <img src={pic.src} className="game-img" />
    </div>
  );
};

export default Game;
