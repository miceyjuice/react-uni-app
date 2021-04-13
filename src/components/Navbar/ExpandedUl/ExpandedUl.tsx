import { FC } from "react";
import Li from "../../../styledHelpers/components/navbar/Li";
import Ul from "../../../styledHelpers/components/navbar/Ul";
import StyledA from "../../../styledHelpers/components/StyledA";
import SearchInput from "../../../styledHelpers/components/navbar/SearchInput";
import Theme from "../../../styledHelpers/Theme";
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
  font-weight: ${Theme.FontWeights.regular};
  font-size: 0.75rem;
  padding-left: 5%;
`;

const FilterSearchInput = styled(SearchInput)`
  max-height: 1.875rem;
  padding-left: 0.8rem;
`;

const StyledUl = styled(Ul)`
  background-color: #2a2a2a;
  left: 5%;
  min-width: 14rem;
  border-radius: 0 0 10px 10px;
  max-width: 15.375rem;
`;

export const ExpandedUl: FC = () => {
  return (
    <StyledUl>
      <Li>
        <FilterSearchInput type="text" placeholder="Filter..." />
      </Li>
      <InnerLi>
        <SectionParagraph>Platform</SectionParagraph>
        <StyledA
          to="/"
          paddingTop={"2px"}
          fontColor={Theme.Colors.white}
          beforeImg={Theme.Icons.home}
          beforeLeft={"5%"}
          fontSize={"0.875rem"}
        >
          Home
        </StyledA>
        <StyledA
          to="/publications"
          paddingTop={"2px"}
          fontColor={Theme.Colors.white}
          beforeImg={Theme.Icons.home}
          beforeLeft={"5%"}
          fontSize={"0.875rem"}
        >
          Publications
        </StyledA>
        <StyledA
          to="/people"
          paddingTop={"2px"}
          fontColor={Theme.Colors.white}
          beforeImg={Theme.Icons.home}
          beforeLeft={"5%"}
          fontSize={"0.875rem"}
        >
          People
        </StyledA>
        <StyledA
          to="/entities"
          paddingTop={"2px"}
          fontColor={Theme.Colors.white}
          beforeImg={Theme.Icons.home}
          beforeLeft={"5%"}
          fontSize={"0.875rem"}
        >
          Entities
        </StyledA>
        <StyledA
          to="/administration"
          paddingTop={"2px"}
          fontColor={Theme.Colors.white}
          beforeImg={Theme.Icons.home}
          beforeLeft={"5%"}
          fontSize={"0.875rem"}
        >
          Administration
        </StyledA>
      </InnerLi>
      <InnerLi>
        <SectionParagraph>Workspaces</SectionParagraph>
        <StyledA
          to="/client-contract"
          paddingTop={"2px"}
          fontColor={Theme.Colors.white}
          beforeImg={Theme.Icons.home}
          beforeLeft={"5%"}
          fontSize={"0.875rem"}
        >
          Client contract
        </StyledA>
        <StyledA
          to="/supplier-contract"
          paddingTop={"2px"}
          fontColor={Theme.Colors.white}
          beforeImg={Theme.Icons.home}
          beforeLeft={"5%"}
          fontSize={"0.875rem"}
        >
          Supplier contract
        </StyledA>
        <StyledA
          to="/corporate"
          paddingTop={"2px"}
          fontColor={Theme.Colors.white}
          beforeImg={Theme.Icons.home}
          beforeLeft={"5%"}
          fontSize={"0.875rem"}
        >
          Corporate
        </StyledA>
        <StyledA
          to="/group-norms"
          paddingTop={"2px"}
          fontColor={Theme.Colors.white}
          beforeImg={Theme.Icons.home}
          beforeLeft={"5%"}
          fontSize={"0.875rem"}
        >
          Group Norms
        </StyledA>
        <StyledA
          to="/real-estate-contracts"
          paddingTop={"2px"}
          fontColor={Theme.Colors.white}
          beforeImg={Theme.Icons.home}
          beforeLeft={"5%"}
          fontSize={"0.875rem"}
        >
          Real estate contracts
        </StyledA>
      </InnerLi>
    </StyledUl>
  );
};

export default ExpandedUl;
