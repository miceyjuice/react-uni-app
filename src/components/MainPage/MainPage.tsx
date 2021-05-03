import React, { FC, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import SideBar from "../Sidebar/Sidebar";
import Wrapper from "../../styledHelpers/components/Wrapper";
import Content from "../../styledHelpers/components/Content";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUsers, getUsersPhotos } from "../../actions/usersActions";
import Feed from "../Feed/Feed";

type GetUsers = ReturnType<typeof getUsers>;
type GetUsersPhotos = ReturnType<typeof getUsersPhotos>;

export const MainPage: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<GetUsers>(getUsers());
    dispatch<GetUsersPhotos>(getUsersPhotos());
  }, []);

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
              <Route path="/">
                Home component
                <Feed/>
              </Route>
            </Switch>
          </Content>
        </Wrapper>
      </Router>
    </>
  );
};

export default MainPage;
