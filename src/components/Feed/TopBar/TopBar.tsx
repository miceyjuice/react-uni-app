import React, { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import Theme from "../../../styledHelpers/Theme";
import {
  Search,
  SearchIcon,
  SearchInput,
} from "../../Entities/Options/OptionsStyle";
import {
  Options,
  SelectionWrapper,
  Title,
  Selection,
  Option,
  Wrapper,
} from "./TopBarStyle";

interface IFilterProps {
  setFilterValue: Dispatch<SetStateAction<string>>;
  filterValue: string;
}

interface ISelectProps {
  selectValue: string;
  setSelectValue: Dispatch<SetStateAction<string>>;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export const TopBar: FC<IFilterProps & ISelectProps> = ({ filterValue, setFilterValue, selectValue, setSelectValue, setCurrentPage }) => {
  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setFilterValue(text);
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectValueText = e.target.value;
    setSelectValue(selectValueText);
    setCurrentPage(1);
  }

  return (
    <Wrapper>
      <Title>Resume your work</Title>
      <Options>
        <Search>
          <SearchInput
            placeholder="Search..."
            value={filterValue}
            onChange={inputHandler}
          />
          <SearchIcon src={process.env.PUBLIC_URL + Theme.Icons.search} />
        </Search>
        <SelectionWrapper>
          <Selection onChange={handleSelectChange} value={selectValue}>
            <Option>Followed</Option>
            <Option>All</Option>
          </Selection>
        </SelectionWrapper>
      </Options>
    </Wrapper>
  );
};

export default TopBar;
