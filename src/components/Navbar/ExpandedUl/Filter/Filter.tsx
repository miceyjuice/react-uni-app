import { FC, useState, ChangeEvent, Dispatch, SetStateAction } from "react";
import Li from "../../../../styledHelpers/components/navbar/Li";
import { FilterSearchInput } from "./FilterStyle";

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