import { FC } from "react";
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
  return (
    <Li>
      <FilterSearchInput type="text" placeholder="Filter..." />
    </Li>
  );
}
export default Filter;