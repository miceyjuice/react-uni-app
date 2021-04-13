import { FC } from "react";
import Navbar from "../Navbar/Navbar";
import SideBar from "../Sidebar/Sidebar";
import Wrapper from "../../styledHelpers/components/Wrapper";
import Content from "../../styledHelpers/components/Content";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const App: FC = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Wrapper>
          <SideBar />
          <Content>
            <Switch>
              <Route path="/publications">Publications component</Route>
              <Route path="/entities">Entities component</Route>
              <Route path="/">Home component</Route>
            </Switch>
          </Content>
        </Wrapper>
      </Router>
    </>
  );
};

export default App;
