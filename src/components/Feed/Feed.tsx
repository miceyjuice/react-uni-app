import React, { FC } from "react";
import styled from "styled-components";
import Theme from "../../styledHelpers/Theme";
import {
  Search,
  SearchIcon,
  SearchInput,
} from "../Entities/Options/OptionsStyle";
import { Options, SelectionWrapper, Title, TopBar, Wrapper, Selection, Option } from "./FeedStyle";

const WorkList = styled.div``;

export const Feed: FC = () => {
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
        
      </WorkList>
    </Wrapper>
  );
};

export default Feed;
