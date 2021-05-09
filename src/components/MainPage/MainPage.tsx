import React, { FC, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import SideBar from "../Sidebar/Sidebar";
import Feed from "../Feed/Feed";
import Wrapper from "../../styledHelpers/components/Wrapper";
import Content from "../../styledHelpers/components/Content";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUsers, getUsersPhotos, getUsersPosts } from "../../actions/usersActions";
import Publications from "../Publications/Publications";
import Entities from "../Entities/Entities";

export interface IUserProps {
  userId: number;
  postId?: number;
}

type GetUsers = ReturnType<typeof getUsers>;
type GetUsersPhotos = ReturnType<typeof getUsersPhotos>;
type GetUsersPosts = ReturnType<typeof getUsersPosts>

export const MainPage: FC = () => {
  const dispatch = useDispatch();
  const randomId = Math.floor(Math.random() * 9);

  useEffect(() => {
    dispatch<GetUsers>(getUsers());
    dispatch<GetUsersPhotos>(getUsersPhotos());
    dispatch<GetUsersPosts>(getUsersPosts());
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
              <Route path="/entities">
                <Entities />
              </Route>
              <Route path="/">
                <Publications userId={randomId} />
              </Route>
            </Switch>
          </Content>
        </Wrapper>
      </Router>
    </>
  );
};

export default MainPage;
