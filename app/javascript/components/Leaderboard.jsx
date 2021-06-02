import React, { useEffect, useState } from "react";
import Nav from "./Nav";

const Leaderboard = (props) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch(`/api/v1/pictures/${props.lid}/players`)
      .then((response) => response.json())
      .then((data) => {
        setPlayers(data);
      });
  }, []);

  const convertToMins = (time) => {
    const duration = Number(time);
    const hour = `${Math.floor(duration / 3600)}`;
    const min = `${Math.floor(duration / 60)}`;
    const sec = `${duration % 60}`;
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
