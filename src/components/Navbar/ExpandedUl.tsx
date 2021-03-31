import { FC } from "react";
import Li from "../../styledHelpers/components/navbar/Li";
import Ul from "../../styledHelpers/components/navbar/Ul";
import StyledA from "../../styledHelpers/components/StyledA";
import SearchInput from '../../styledHelpers/components/navbar/SearchInput';
import Theme from "../../styledHelpers/Theme";
import styled from "styled-components";

const InnerLi = styled(Li)`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  text-align: start !important;
  height: auto;

  > * {
    flex-basis: 100%;
    text-align: unset;
  }

  a {
    padding: 0 0 1rem 3rem;
  }
`;

const SectionParagraph = styled.p`
  font-weight: ${Theme.FontWeights.semibold};
`;

const FilterSearchInput = styled(SearchInput)`
  max-height: 1.875rem;
  padding-left: 0.8rem;
`;

const StyledUl = styled(Ul)`
  background-color: ${Theme.Colors.darkGrey};
  left: -4rem;
`;


export const ExpandedUl: FC = () => {
  return (
      <StyledUl>
        <Li>
          <FilterSearchInput type="text" placeholder="Filter..."/>
        </Li>
        <InnerLi>
          <SectionParagraph>
            Platform
          </SectionParagraph>
          <StyledA beforeImg={Theme.Icons.home}>
            Home
          </StyledA>
          <StyledA beforeImg={Theme.Icons.home}>
            Publications
          </StyledA>
          <StyledA beforeImg={Theme.Icons.home}>
            People
          </StyledA>
          <StyledA beforeImg={Theme.Icons.home}>
            Entities
          </StyledA>
          <StyledA beforeImg={Theme.Icons.home}>
            Administration
          </StyledA>
        </InnerLi>
      </StyledUl>
  );
};

export default ExpandedUl;
