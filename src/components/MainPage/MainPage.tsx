import React, { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
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
import Workspaces from "../Workspaces/Workspaces";

export interface IUserProps {
  userId: number;
  postId?: number;
}

export interface IDisplayProps {
  isHidden: boolean;
  setDisplayValue?: Dispatch<SetStateAction<boolean>>;
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

  const [isHidden, setIsHidden] = useState<boolean>(false);

  return (
    <>
      <Router>
        <Navbar userId={randomId} isHidden={isHidden} />
        <Wrapper>
          <SideBar userId={randomId} isHidden={isHidden} />
          <Content fullWidth={isHidden}>
            <Switch>
              <Route path="/publications">Publications component</Route>
              <Route path="/entities">
                <Entities setDisplayValue={setIsHidden} isHidden={isHidden}/>
              </Route>
              <Route path="/">
                <Publications userId={randomId} />
                <Workspaces />
                <Feed />
              </Route>
            </Switch>
          </Content>
        </Wrapper>
      </Router>
    </>
  );
};

export default MainPage;
