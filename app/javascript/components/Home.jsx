import React from "react";
import waldo from "../../assets/images/waldo.png";
import store from "../../assets/images/departmentStore.jpeg";
import beach from "../../assets/images/onTheBeach.jpeg";
import city from "../../assets/images/City.jpeg";

const Home = () => {
  return (
    <div>
      <nav>
        <img src={waldo} alt="waldo" />
        <p>Where's Waldo</p>
      </nav>
      <main>
        <div class="card-grid">
          <div class="card">
            <img src={city} />
            <p>City</p>
            <div class="game-controls">
              <a class="btn btn-success">Play</a>
              <a class="btn btn-warning">Leaderboard</a>
            </div>
          </div>
          <div class="card">
            <img src={store} />
            <p>Department Store</p>
            <div class="game-controls">
              <a class="btn btn-success">Play</a>
              <a class="btn btn-warning">Leaderboard</a>
            </div>
          </div>
          <div class="card">
            <img src={beach} />
            <p>On the Beach</p>
            <div class="game-controls">
              <a class="btn btn-success">Play</a>
              <a class="btn btn-warning">Leaderboard</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
