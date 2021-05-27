import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Game from "../components/Game";
import "../../assets/stylesheets/pictures.scss";
import store from "../../assets/images/departmentStore.jpeg";
import beach from "../../assets/images/onTheBeach.jpeg";
import city from "../../assets/images/City.jpeg";

const App = () => {
  const allPics = {
    city: {
      name: "City",
      src: city,
      id: 1,
    },
    store: {
      name: "Department Store",
      src: store,
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
