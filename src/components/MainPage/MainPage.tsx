import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Navbar from "../Navbar/Navbar";
import SideBar from "../Sidebar/Sidebar";
import Feed from "../Feed/Feed";
import Wrapper from "../../styledHelpers/components/Wrapper";
import Content from "../../styledHelpers/components/Content";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getUsers,
  getUsersComments,
  getUsersPhotos,
  getUsersPosts,
} from "../../actions/usersActions";
import Publications from "../Publications/Publications";
import Entities from "../Entities/Entities";
import Workspaces from "../Workspaces/Workspaces";
import Profile from "../Profile/Profile";
import { UserIdContext } from "../../contexts/UserIdContext";
import SingleWorkspace from "../Workspaces/SingleWorkspace/SingleWorkspace";
import Theme from "../../styledHelpers/Theme";

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
type GetUsersPosts = ReturnType<typeof getUsersPosts>;
type GetUsersComments = ReturnType<typeof getUsersComments>;

export const MainPage: FC = () => {
  const dispatch = useDispatch();
  const randomId = Math.floor(Math.random() * 9);

  useEffect(() => {
    dispatch<GetUsers>(getUsers());
    dispatch<GetUsersPhotos>(getUsersPhotos());
    dispatch<GetUsersPosts>(getUsersPosts());
    dispatch<GetUsersComments>(getUsersComments());
  }, []);

  const [isHidden, setIsHidden] = useState<boolean>(false);

  return (
    <>
      <Router>
        <UserIdContext.Provider value={randomId}>
          <Navbar isHidden={isHidden} />
          <Wrapper>
            <SideBar isHidden={isHidden} />
            <Content fullWidth={isHidden}>
              <Switch>
                <Route path="/publications">Publications component</Route>
                <Route path="/entities">
                  <Entities setDisplayValue={setIsHidden} isHidden={isHidden} />
                </Route>
                <Route path="/profile">
                  <Profile />
                </Route>
                <Route path="/client-contract">
                  <SingleWorkspace type={"Client contract"} icon={Theme.Icons.contract} />
                </Route>
                <Route path="/supplier-contract">
                  <SingleWorkspace type={"Supplier contract"} icon={Theme.Icons.contract} />
                </Route>
                <Route path="/corporate">
                  <SingleWorkspace type={"Corporate"} icon={Theme.Icons.corporate} />
                </Route>
                <Route path="/group-norms">
                  <SingleWorkspace type={"Group norms"} icon={Theme.Icons.book} />
                </Route>
                <Route path="/real-estate-contracts">
                  <SingleWorkspace type={"Real estate contracts"} icon={Theme.Icons.contract} />
                </Route>
                <Route path="/">
                  <Publications />
                  <Workspaces />
                  <Feed />
                </Route>
              </Switch>
            </Content>
          </Wrapper>
        </UserIdContext.Provider>
      </Router>
    </>
  );
};

export default MainPage;
