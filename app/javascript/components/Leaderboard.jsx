import React, { useEffect, useState, useRef } from "react";
import Nav from "./Nav";
import Loader from "./Loader";

const Leaderboard = (props) => {
  const [players, setPlayers] = useState([]);
  const loaderRef = useRef();

  useEffect(() => {
    loaderRef.current.style.display = "flex";
    fetch(`/api/v1/pictures/${props.lid}/players`)
      .then((response) => response.json())
      .then((data) => {
        setPlayers(data);
        loaderRef.current.style.display = "none";
      });
  }, []);

  const convertToMins = (time) => {
    const hour = `${Math.floor(time / 3600)}`;
    const min = `${Math.floor(time / 60)}`;
    const sec = `${time % 60}`;
    return Number(hour)
      ? `${hour.padStart(2, "0")}:${min.padStart(2, "0")}:${sec.padStart(
          2,
          "0"
        )}`
      : `${min.padStart(2, "0")}:${sec.padStart(2, "0")}`;
  };

  return (
    <div className="leaderboard">
      <Nav />
      <Loader loaderRef={loaderRef} />
      <div className="leaderboard-main">
        <h1>Leaderboard</h1>
        <ol type="1">
          {players.map((player, index) => (
            <li key={index}>
              <span>{player.name}</span>
              <span className="time">{convertToMins(player.time)}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Leaderboard;
