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

interface ISingleWorkspace {
  title: string;
  icon: string;
}

type GetUsers = ReturnType<typeof getUsers>;
type GetUsersPhotos = ReturnType<typeof getUsersPhotos>;
type GetUsersPosts = ReturnType<typeof getUsersPosts>;
type GetUsersComments = ReturnType<typeof getUsersComments>;

const singleWorkspaces: ISingleWorkspace[] = [
  {
    title: "Client contract",
    icon: Theme.Icons.contract,
  },
  {
    title: "Supplier contract",
    icon: Theme.Icons.contract,
  },
  {
    title: "Corporate",
    icon: Theme.Icons.corporate,
  },
  {
    title: "Group norms",
    icon: Theme.Icons.book,
  },
  {
    title: "Real estate contracts",
    icon: Theme.Icons.contract,
  },
];

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
                {singleWorkspaces.map((workspace, idx) => (
                  <Route
                    key={`${workspace.title.toLowerCase().replaceAll(" ", "")}${
                      idx + 1
                    }`}
                    path={
                      "/" + workspace.title.toLowerCase().replaceAll(" ", "-")
                    }
                  >
                    <SingleWorkspace
                      type={workspace.title}
                      icon={workspace.icon}
                      key={`singleworkspace${idx}`}
                    />
                  </Route>
                ))}

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
