import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Game from "../components/Game";
import slopes from "../../assets/images/skiSlopes.jpg";
import beach from "../../assets/images/onTheBeach.jpg";
import town from "../../assets/images/town.jpeg";
import wenda from "../../assets/images/wenda.jpeg";
import waldo from "../../assets/images/waldo.png";
import odlaw from "../../assets/images/odlaw.jpeg";
import whitebeard from "../../assets/images/whitebeard.jpeg";

const App = () => {
  const characters = {
    waldo: waldo,
    wenda: wenda,
    odlaw: odlaw,
    whitebeard: whitebeard,
  };

  const allPics = {
    town: {
      name: "In Town",
      src: town,
      id: 1,
    },
    slopes: {
      name: "Ski Slopes",
      src: slopes,
      id: 2,
    },
    beach: {
      name: "On the Beach",
      src: beach,
      id: 3,
    },
  };

  const pictureRoutes = () => {
    const routesArr = [];
    for (const pic in allPics) {
      allPics[pic].characters = characters;
      let pathName = "/play/" + allPics[pic].id;

      routesArr.push(
        <Route
          path={pathName}
          key={allPics[pic].id}
          exact
          render={(props) => <Game {...props} pic={allPics[pic]} />}
        />
      );
    }
    return routesArr;
  };

  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => <Home {...props} allPics={allPics} />}
        />
        {pictureRoutes()}
      </Switch>
    </Router>
  );
};

export default App;
