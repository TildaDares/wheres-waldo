import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import TargetBox from "./TargetBox";
import Marker from "./Marker";
import Timer from "./Timer";

const Game = (props) => {
  const history = useHistory();
  const pic = props.pic;
  const [coord, setCoord] = useState({
    x: 0,
    y: 0,
  });
  const [isActive, setIsActive] = useState(true);
  const characters = useRef([]);
  const targetBox = useRef();
  const waldo = useRef();
  const wenda = useRef();
  const odlaw = useRef();
  const whitebeard = useRef();
  const timer = useRef();
  const allRefs = useRef([useRef(), useRef(), useRef(), useRef()]);

  useEffect(() => {
    fetch(`/api/v1/pictures/${pic.id}/characters`)
      .then((response) => response.json())
      .then((data) => {
        characters.current = data;
      });
  }, []);

  const goHome = (path = "/") => {
    setIsActive(false);
    history.push(path);
  };

  const getCharRef = (name) => {
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

  const puzzleSolved = () => {
    if (characters.current.length === 0) {
      const timeInSecs =
        Number(timer.current.children[0].textContent) * 60 +
        Number(timer.current.children[2].textContent);
      const name = prompt("Tell me your name") || "anon";
      const token = document.querySelector('meta[name="csrf-token"]').content;
      const body = {
        name,
        time: timeInSecs,
        picture_id: pic.id,
      };
      fetch(`/api/v1/pictures/${pic.id}/players`, {
        method: "POST",
        headers: {
          "X-CSRF-Token": token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .catch((error) => console.log(error.message));
      goHome(`/leaderboard/${pic.id}`);
    }
  };

  const didTheyFindWaldo = (event) => {
    targetBox.current.style.display = "none";
    const elem = event.currentTarget;
    const characterID = Number(elem.id);
    if (
      withinRange(coord.x, characters.current[characterID].x_coord) &&
      withinRange(coord.y, characters.current[characterID].y_coord)
    ) {
      const charactersLeft = characters.current.filter(
        (char) => char.name !== characters.current[characterID].name
      );
      const marker = allRefs.current[charactersLeft.length].current;
      const imgRef = getCharRef(characters.current[characterID].name).current;
      imgRef.style.filter = "blur(5px)";
      marker.style.display = "block";
      marker.style.left = targetBox.current.style.left;
      marker.style.top = targetBox.current.style.top;
      characters.current = charactersLeft;
      puzzleSolved();
    }
  };

  const withinRange = (userCoord, realCoord) => {
    const diff = Math.abs(realCoord - userCoord);
    return diff >= -1 && diff <= 1;
  };

  const getClickCoords = (event) => {
    const elem = event.target;
    const coord_x = Math.floor(
      (((event.pageX - elem.offsetLeft) / elem.width) * 10000) / 100
    );
    const coord_y = Math.floor(
      (((event.pageY - elem.offsetTop) / elem.width) * 10000) / 100
    );
    targetBox.current.style.display = "block";
    targetBox.current.style.left = event.pageX + "px";
    targetBox.current.style.top = event.pageY + "px";
    setCoord({ x: coord_x, y: coord_y });
  };

  const getCharacterImages = () => {
    const image = [];
    for (const img in pic.characters) {
      image.push(
        <img
          src={pic.characters[img]}
          key={img}
          alt={img}
          id={img}
          className="character"
          ref={getCharRef(img)}
        />
      );
    }

    return image;
  };

  return (
    <div className="game-container">
      <div className="characters-container">
        <div>{getCharacterImages()}</div>
        <Timer isActive={isActive} timerRef={timer} />
        <Link to="/" className="btn btn-danger give-up" onClick={goHome}>
          Give Up
        </Link>
      </div>
      <img
        src={pic.src}
        className="game-img"
        onClick={(event) => getClickCoords(event)}
      />
      <TargetBox
        boxRef={targetBox}
        didTheyFindWaldo={didTheyFindWaldo}
        characters={characters.current}
      />
      {allRefs.current.map((refs, index) => (
        <Marker markerRef={refs} mid={"marker" + index} key={index} />
      ))}
    </div>
  );
};

export default Game;
