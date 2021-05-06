import React, { FC, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import SideBar from "../Sidebar/Sidebar";
import Feed from "../Feed/Feed";
import Wrapper from "../../styledHelpers/components/Wrapper";
import Content from "../../styledHelpers/components/Content";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUsers, getUsersPhotos } from "../../actions/usersActions";
import Publications from "../Publications/Publications";

export interface IUserIdProps {
  userId: number;
}

type GetUsers = ReturnType<typeof getUsers>;
type GetUsersPhotos = ReturnType<typeof getUsersPhotos>;

export const MainPage: FC = () => {
  const dispatch = useDispatch();
  
  const randomId = Math.floor(Math.random() * 9);

  useEffect(() => {
    dispatch<GetUsers>(getUsers());
    dispatch<GetUsersPhotos>(getUsersPhotos());
  }, []);

  return (
    <>
      <Router>
        <Navbar userId={randomId} />
        <Wrapper>
          <SideBar userId={randomId} />
          <Content>
            <Switch>
              <Route path="/publications">Publications component</Route>
              <Route path="/entities">Entities component</Route>
              <Route path="/">
                <Publications/>
              </Route>
            </Switch>
          </Content>
        </Wrapper>
      </Router>
    </>
  );
};

export default MainPage;
