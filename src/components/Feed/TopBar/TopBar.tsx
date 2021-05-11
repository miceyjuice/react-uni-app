import React, { FC } from "react";
import Theme from "../../../styledHelpers/Theme";
import { Search, SearchIcon, SearchInput } from "../../Entities/Options/OptionsStyle";
import { Options, SelectionWrapper, Title, Selection, Option } from "./TopBar";

export const TopBar: FC = () => {
  return (
    <>
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
    </>
  );
};

export default TopBar;