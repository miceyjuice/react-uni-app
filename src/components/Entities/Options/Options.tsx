import React, { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import Theme from "../../../styledHelpers/Theme";
import { IDisplayProps } from "../../MainPage/MainPage";
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

interface IMoreFilterOptionsProps {
  setFiltersVisibility: Dispatch<SetStateAction<boolean>>;
  filtersVisibility: boolean;
}

interface IFilterProps {
  setFilterValue: Dispatch<SetStateAction<string>>;
  filterValue: string;
}

export const Options: FC<
  IMoreFilterOptionsProps & IDisplayProps & IFilterProps
> = ({
  setFiltersVisibility,
  filtersVisibility,
  isHidden,
  setDisplayValue,
  filterValue,
  setFilterValue,
}) => {
  const resizeBox = () => {
    setDisplayValue!(!isHidden);
  };

  const showMoreFilterOptions = () => {
    setFiltersVisibility(!filtersVisibility);
  };

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setFilterValue(text);
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
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
            alert("Link copied to the clipboard!");
          }}
        >
          Share
        </Share>
      </LeftBlock>
      <RightBlock>
        <Search>
          <SearchInput
            placeholder="Search..."
            value={filterValue}
            onChange={inputHandler}
          />
          <SearchIcon src={process.env.PUBLIC_URL + Theme.Icons.search} />
        </Search>
        <Filter>Followed</Filter>
      </RightBlock>
    </Wrapper>
  );
};

export default Options;
