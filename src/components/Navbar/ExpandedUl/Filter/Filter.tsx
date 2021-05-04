import { FC, useState, ChangeEvent } from "react";
import styled from "styled-components";
import Li from "../../../../styledHelpers/components/navbar/Li";
import SearchInput from "../../../../styledHelpers/components/navbar/SearchInput";

const FilterSearchInput = styled(SearchInput)`
  max-height: 1.875rem;
  padding: 1.2rem;
  width: 100% !important;
  font-size: 0.9rem;
`;

export const Filter: FC = () => {
  const [inputText, setInputText] = useState<string>('');

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputText(text);
  }

  return (
    <Li>
      <FilterSearchInput type="text" placeholder="Filter..." value={inputText} onChange={inputHandler} />
    </Li>
  );
}
export default Filter;