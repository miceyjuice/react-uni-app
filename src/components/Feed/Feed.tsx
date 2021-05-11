import React, { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { IState } from "../../reducers";
import { IUsersCommentsReducer } from "../../reducers/usersCommentsReducers";
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

const WorkList = styled.div``;

export const Feed: FC = () => {
  const { usersCommentsList } = useSelector<IState, IUsersCommentsReducer>(
    (globalState) => ({
      ...globalState.usersCommentsList,
    })
  );

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
          <div>
            <p>{comment.name}</p>
          </div>
        ))}
      </WorkList>
    </Wrapper>
  );
};

export default Feed;
