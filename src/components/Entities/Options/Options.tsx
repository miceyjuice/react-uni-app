import React, { Dispatch, FC, SetStateAction } from "react";
import Theme from "../../../styledHelpers/Theme";
import {
  All,
  Filter,
  Filters,
  LeftBlock,
  MoreOptions,
  Resize,
  RightBlock,
  Search,
  SearchIcon,
  SearchInput,
  Share,
  Sort,
  Wrapper,
} from "./OptionsStyle";

interface IFilterProps {
  setFiltersVisibility: Dispatch<SetStateAction<boolean>>;
  filtersVisibility: boolean;
}

export const Options: FC<IFilterProps> = ({
  setFiltersVisibility,
  filtersVisibility,
}) => {
  const resizeBox = () => {
    console.log("clicked");
  };

  const showMoreFilterOptions = () => {
    setFiltersVisibility(!filtersVisibility);
  };

  return (
    <Wrapper>
      <LeftBlock>
        <All>All</All>
        <MoreOptions src={process.env.PUBLIC_URL + Theme.Icons.more} />
        <Sort>Sort</Sort>
        <Filters onClick={showMoreFilterOptions}>Filters</Filters>
        <Resize
          onClick={resizeBox}
          src={process.env.PUBLIC_URL + Theme.Icons.resize}
        />
        <Share
          onClick={() => navigator.clipboard.writeText(window.location.href)}
        >
          Share
        </Share>
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
