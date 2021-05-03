import { FC } from "react";
import StyledA from "../../../../styledHelpers/components/StyledA";
import Theme from "../../../../styledHelpers/Theme";
import { SectionParagraph } from "../../../../styledHelpers/components/navbar/expandedUl/SectionParagraph";
import { InnerLi } from "../../../../styledHelpers/components/navbar/expandedUl/InnerLi";

export const Workspace: FC = () => {
  return (
    <InnerLi>
      <SectionParagraph>Workspaces</SectionParagraph>
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
      <StyledA
        to="/group-norms"
        paddingTop={"2px"}
        fontColor={Theme.Colors.white}
        beforeImg={Theme.Icons.book}
        beforeLeft={"5%"}
        fontSize={"0.875rem"}
      >
        Group Norms
      </StyledA>
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
    </InnerLi>
  );
};

export default Workspace;
