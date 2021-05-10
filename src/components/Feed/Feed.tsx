import React, { FC } from "react";
import styled from "styled-components";
import Theme from "../../styledHelpers/Theme";
import {
  Search,
  SearchIcon,
  SearchInput,
} from "../Entities/Options/OptionsStyle";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 2rem;
`;
const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const Title = styled.h3`
  color: ${Theme.Colors.red};
`;
const Options = styled.div`
  display: flex;
  gap: 2rem;
`;

const Selection = styled.select``;
const Option = styled.option``;

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
          <Selection>
            <Option>Followed</Option>
            <Option>All</Option>
          </Selection>
        </Options>
      </TopBar>
    </Wrapper>
  );
};

export default Feed;
