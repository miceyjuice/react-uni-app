import React, { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { IState } from "../../reducers";
import { IUsersCommentsReducer } from "../../reducers/usersCommentsReducers";
import { IUsersReducer } from "../../reducers/usersReducers";
import Theme from "../../styledHelpers/Theme";
import {
  Search,
  SearchIcon,
  SearchInput,
} from "../Entities/Options/OptionsStyle";
import {
  Options,
  SelectionWrapper,
  Title,
  TopBar,
  Wrapper,
  Selection,
  Option,
} from "./FeedStyle";

const WorkList = styled.div`
  color: white;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Work = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #444;
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: #222;
`;
const WorkTitle = styled.h3`
  margin: 0.5rem 0;
`;
const Content = styled.p`
  color: #ddd;
  margin-bottom: 0.5rem;
`;
const BottomBar = styled.div`
  display: flex;
  gap: 1rem;
  margin: 0;
  font-size: ${Theme.FontSizes[14]};
  color: #888;
`;
const CompanyName = styled.p``;
const Category = styled.p``;
const LastUpdate = styled.p``;

export const Feed: FC = () => {
  const { usersCommentsList, usersList } = useSelector<
    IState,
    IUsersCommentsReducer & IUsersReducer
  >((globalState) => ({
    ...globalState.usersCommentsList,
    ...globalState.users,
  }));

  return (
    <Wrapper>
      <TopBar>
        <Title>Resume your work</Title>
        <Options>
          <Search>
            <SearchInput placeholder="Search..." />
            <SearchIcon src={process.env.PUBLIC_URL + Theme.Icons.search} />
          </Search>
          <SelectionWrapper>
            <Selection>
              <Option>Followed</Option>
              <Option>All</Option>
            </Selection>
          </SelectionWrapper>
        </Options>
      </TopBar>
      <WorkList>
        {usersCommentsList?.slice(0, 49).map((comment) => (
          <Work>
            <WorkTitle>{comment.name}</WorkTitle>
            <Content>{comment.body}</Content>
            <BottomBar>
              <CompanyName>Subsid. corp</CompanyName>
              <Category>Contract</Category>
              <LastUpdate>
                Updated 3 days ago by{" "}
                {usersList.find((user) => user.id === comment.postId)?.name}
              </LastUpdate>
            </BottomBar>
          </Work>
        ))}
      </WorkList>
    </Wrapper>
  );
};

export default Feed;
