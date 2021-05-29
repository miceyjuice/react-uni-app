import { FC } from "react";
import { StyledA } from "../../../../styledHelpers/components/StyledA";
import Theme from "../../../../styledHelpers/Theme";
import { SectionParagraph } from "../../../../styledHelpers/components/navbar/expandedUl/SectionParagraph";
import { InnerLi } from "../../../../styledHelpers/components/navbar/expandedUl/InnerLi";
import { IFilterProps } from "../ExpandedUl";

export const Platform: FC<IFilterProps> = ({ filterValue }) => {
  return (
    <InnerLi>
      <SectionParagraph>Platform</SectionParagraph>
      {"Home".toLowerCase().includes(filterValue.toLowerCase()) && (
        <>
          <StyledA
            to="/"
            paddingtop={"2px"}
            fontcolor={Theme.Colors.white}
            beforeimg={Theme.Icons.home}
            beforeleft={"5%"}
            fontsize={"0.875rem"}
          >
            Home
          </StyledA>
        </>
      )}
      {"Publications".toLowerCase().includes(filterValue.toLowerCase()) && (
        <StyledA
          to="/publications"
          paddingtop={"2px"}
          fontcolor={Theme.Colors.white}
          beforeimg={Theme.Icons.yourPublications}
          beforeleft={"5%"}
          fontsize={"0.875rem"}
        >
          Publications
        </StyledA>
      )}
      {"People".toLowerCase().includes(filterValue.toLowerCase()) && (
      <StyledA
        to="/people"
        paddingtop={"2px"}
        fontcolor={Theme.Colors.white}
        beforeimg={Theme.Icons.network}
        beforeleft={"5%"}
        fontsize={"0.875rem"}
      >
        People
      </StyledA>
      )}
      {"Entities".toLowerCase().includes(filterValue.toLowerCase()) && (
      <StyledA
        to="/entities"
        paddingtop={"2px"}
        fontcolor={Theme.Colors.white}
        beforeimg={Theme.Icons.entities}
        beforeleft={"5%"}
        fontsize={"0.875rem"}
      >
        Entities
      </StyledA>
      )}
      {"Administration".toLowerCase().includes(filterValue.toLowerCase()) && (
      <StyledA
        to="/administration"
        paddingtop={"2px"}
        fontcolor={Theme.Colors.white}
        beforeimg={Theme.Icons.administration}
        beforeleft={"5%"}
        fontsize={"0.875rem"}
      >
        Administration
      </StyledA>
      )}
    </InnerLi>
  );
};

export default Platform;
