import { FC } from "react";
import StyledA from "../../../../styledHelpers/components/StyledA";
import Theme from "../../../../styledHelpers/Theme";
import { SectionParagraph } from "../../../../styledHelpers/components/navbar/expandedUl/SectionParagraph";
import { InnerLi } from "../../../../styledHelpers/components/navbar/expandedUl/InnerLi";
import { IFilterProps } from "../ExpandedUl";

export const Workspace: FC<IFilterProps> = ({ filterValue }) => {
  return (
    <InnerLi>
      <SectionParagraph>Workspaces</SectionParagraph>
      {"Client contract".toLowerCase().includes(filterValue.toLowerCase()) && (
        <StyledA
          to="/client-contract"
          paddingTop={"2px"}
          fontColor={Theme.Colors.white}
          beforeImg={Theme.Icons.contract}
          beforeLeft={"5%"}
          fontSize={"0.875rem"}
        >
          Client contract
        </StyledA>
      )}
      {"Supplier contract".toLowerCase().includes(filterValue.toLowerCase()) && (
        <StyledA
          to="/supplier-contract"
          paddingTop={"2px"}
          fontColor={Theme.Colors.white}
          beforeImg={Theme.Icons.contract}
          beforeLeft={"5%"}
          fontSize={"0.875rem"}
        >
          Supplier contract
        </StyledA>
      )}
      {"Corporate".toLowerCase().includes(filterValue.toLowerCase()) && (
        <StyledA
          to="/corporate"
          paddingTop={"2px"}
          fontColor={Theme.Colors.white}
          beforeImg={Theme.Icons.entities}
          beforeLeft={"5%"}
          fontSize={"0.875rem"}
        >
          Corporate
        </StyledA>
      )}
      {"Group Norms".toLowerCase().includes(filterValue.toLowerCase()) && (
        <StyledA
          to="/group-norms"
          paddingTop={"2px"}
          fontColor={Theme.Colors.white}
          beforeImg={Theme.Icons.book}
          beforeLeft={"5%"}
          fontSize={"0.875rem"}
        >
          Group norms
        </StyledA>
      )}
      {"Real estate contracts".toLowerCase().includes(filterValue.toLowerCase()) && (
        <StyledA
          to="/real-estate-contracts"
          paddingTop={"2px"}
          fontColor={Theme.Colors.white}
          beforeImg={Theme.Icons.contract}
          beforeLeft={"5%"}
          fontSize={"0.875rem"}
        >
          Real estate contracts
        </StyledA>
      )}
    </InnerLi>
  );
};

export default Workspace;
