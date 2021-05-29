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
          paddingtop={"2px"}
          fontcolor={Theme.Colors.white}
          beforeimg={Theme.Icons.contract}
          beforeleft={"5%"}
          fontsize={"0.875rem"}
        >
          Client contract
        </StyledA>
      )}
      {"Supplier contract".toLowerCase().includes(filterValue.toLowerCase()) && (
        <StyledA
          to="/supplier-contract"
          paddingtop={"2px"}
          fontcolor={Theme.Colors.white}
          beforeimg={Theme.Icons.contract}
          beforeleft={"5%"}
          fontsize={"0.875rem"}
        >
          Supplier contract
        </StyledA>
      )}
      {"Corporate".toLowerCase().includes(filterValue.toLowerCase()) && (
        <StyledA
          to="/corporate"
          paddingtop={"2px"}
          fontcolor={Theme.Colors.white}
          beforeimg={Theme.Icons.entities}
          beforeleft={"5%"}
          fontsize={"0.875rem"}
        >
          Corporate
        </StyledA>
      )}
      {"Group Norms".toLowerCase().includes(filterValue.toLowerCase()) && (
        <StyledA
          to="/group-norms"
          paddingtop={"2px"}
          fontcolor={Theme.Colors.white}
          beforeimg={Theme.Icons.book}
          beforeleft={"5%"}
          fontsize={"0.875rem"}
        >
          Group norms
        </StyledA>
      )}
      {"Real estate contracts".toLowerCase().includes(filterValue.toLowerCase()) && (
        <StyledA
          to="/real-estate-contracts"
          paddingtop={"2px"}
          fontcolor={Theme.Colors.white}
          beforeimg={Theme.Icons.contract}
          beforeleft={"5%"}
          fontsize={"0.875rem"}
        >
          Real estate contracts
        </StyledA>
      )}
    </InnerLi>
  );
};

export default Workspace;
