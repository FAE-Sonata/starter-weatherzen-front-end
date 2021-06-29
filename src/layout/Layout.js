import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Menu from "./Menu";
import { Route, Switch } from "react-router-dom";
import Home from "../home/Home";
import ObservationCreate from "../observations/ObservationCreate";

function Layout() {
  return (
    <>
      <Header />
      <Menu />
      <div className="container">
        <Switch>
          <Route path="/observations/edit/:observation_id">
            PENDING {/* <ObservationEdit/> */}
          </Route>
          <Route path="/observations/new">
            <ObservationCreate />
          </Route>
          <Route exact={true} path="/">
            <Home />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
