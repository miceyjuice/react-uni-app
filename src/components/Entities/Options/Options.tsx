import React, { FC } from "react";
import Theme from "../../../styledHelpers/Theme";
import { All, Filter, Filters, LeftBlock, MoreOptions, Resize, RightBlock, Search, SearchIcon, SearchInput, Share, Sort, Wrapper } from "./OptionsStyle";

export const Options: FC = () => {
  return (
    <Wrapper>
      <LeftBlock>
        <All>All</All>
        <MoreOptions src={process.env.PUBLIC_URL + Theme.Icons.more} />
        <Sort>Sort</Sort>
        <Filters>Filters</Filters>
        <Resize src={process.env.PUBLIC_URL + Theme.Icons.resize} />
        <Share>Share</Share>
      </LeftBlock>
      <RightBlock>
        <Search>
          <SearchInput placeholder="Search..." />
          <SearchIcon src={process.env.PUBLIC_URL + Theme.Icons.search} />
        </Search>
        <Filter>Followed</Filter>
      </RightBlock>
    </Wrapper>
  );
};

export default Options;
