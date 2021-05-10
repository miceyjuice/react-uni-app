import React, { Dispatch, FC, SetStateAction } from "react";
import {
  Row,
  Selector,
  Title,
  Where,
  Wrapper,
  Option,
  SearchInput,
  AddFilter,
} from "./MoreFiltersOptionsStyle";

interface IFilterProps {
  filtersVisibility: boolean;
}

export const MoreFilterOptions: FC<IFilterProps> = ({ filtersVisibility }) => {
  return (
    <Wrapper visibility={filtersVisibility}>
      <Title>
        Rows are filtered by the following conditions starting from the top.
      </Title>
      <Row>
        <Where>Where</Where>
        <Selector>
          <Option>Company</Option>
        </Selector>
        <Selector>
          <Option>Contains</Option>
        </Selector>
        <SearchInput type="text" placeholder="Type..." />
      </Row>
      <Row>
        <Where>Where</Where>
        <Selector>
          <Option>Status</Option>
        </Selector>
        <Selector>
          <Option>Is</Option>
        </Selector>
        <SearchInput type="text" placeholder="Type..." />
        <Selector>
          <Option>In</Option>
        </Selector>
        <SearchInput type="text" placeholder="Entity..." />
      </Row>
      <Row>
        <Where>And</Where>
        <Selector>
          <Option>Status</Option>
        </Selector>
        <Selector>
          <Option>Ends before</Option>
        </Selector>
        <SearchInput type="text" placeholder="Date..." />
        <Selector>
          <Option>In</Option>
        </Selector>
        <SearchInput type="text" placeholder="Entity..." />
      </Row>
      <Row>
        <AddFilter>Add filter</AddFilter>
        <Selector customColor>
          <Option>choose property</Option>
        </Selector>
      </Row>
    </Wrapper>
  );
};

export default MoreFilterOptions;
