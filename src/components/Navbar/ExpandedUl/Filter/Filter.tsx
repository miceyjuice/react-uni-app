import { FC, useState, ChangeEvent, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import Li from "../../../../styledHelpers/components/navbar/Li";
import SearchInput from "../../../../styledHelpers/components/navbar/SearchInput";

const FilterSearchInput = styled(SearchInput)`
  max-height: 1.875rem;
  padding: 1.2rem;
  width: 100% !important;
  font-size: 0.9rem;
`;

interface IFilter {
  setFilterValue: Dispatch<SetStateAction<string>>;
  filterValue: string;
}

export const Filter: FC<IFilter> = ({setFilterValue, filterValue}) => {

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setFilterValue(text);
  }

  return (
    <Li>
      <FilterSearchInput type="text" placeholder="Filter..." value={filterValue} onChange={inputHandler} />
    </Li>
  );
}
export default Filter;