import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const Home = (props) => {
  const { town, beach, slopes } = props.allPics;

  return (
    <>
      <Nav />
      <main>
        <div className="card-grid">
          <div className="card">
            <img src={town.src} />
            <p>{town.name}</p>
            <div className="game-controls">
              <Link to="/play/1" className="btn btn-success">
                Play
              </Link>
              <Link to="/leaderboard/1" className="btn btn-warning">
                Leaderboard
              </Link>
            </div>
          </div>
          <div className="card">
            <img src={slopes.src} />
            <p>{slopes.name}</p>
            <div className="game-controls">
              <Link to="/play/2" className="btn btn-success">
                Play
              </Link>
              <Link to="/leaderboard/2" className="btn btn-warning">
                Leaderboard
              </Link>
            </div>
          </div>
          <div className="card">
            <img src={beach.src} />
            <p>{beach.name}</p>
            <div className="game-controls">
              <Link to="/play/3" className="btn btn-success">
                Play
              </Link>
              <Link to="/leaderboard/3" className="btn btn-warning">
                Leaderboard
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
