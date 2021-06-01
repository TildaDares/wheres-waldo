import React from "react";
import wenda from "../../assets/images/wenda.jpeg";
import waldo from "../../assets/images/waldo.png";
import odlaw from "../../assets/images/odlaw.jpeg";
import whitebeard from "../../assets/images/whitebeard.jpeg";

const TargetBox = (props) => {
  const getCharImage = (name) => {
    switch (name) {
      case "waldo":
        return waldo;
      case "odlaw":
        return odlaw;
      case "wenda":
        return wenda;
      case "whitebeard":
        return whitebeard;
    }
  };

  return (
    <div ref={props.boxRef} className="target-box">
      {props.characters.map((char, index) => (
        <p
          id={index}
          key={char.name}
          onClick={(event) => props.didTheyFindWaldo(event)}
        >
          <img src={getCharImage(char.name)} alt={char.name} />
          <span>{char.name}</span>
        </p>
      ))}
    </div>
  );
};

export default TargetBox;
