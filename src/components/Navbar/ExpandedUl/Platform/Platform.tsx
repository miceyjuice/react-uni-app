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
            paddingTop={"2px"}
            fontColor={Theme.Colors.white}
            beforeImg={Theme.Icons.home}
            beforeLeft={"5%"}
            fontSize={"0.875rem"}
          >
            Home
          </StyledA>
        </>
      )}
      {"Publications".toLowerCase().includes(filterValue.toLowerCase()) && (
        <StyledA
          to="/publications"
          paddingTop={"2px"}
          fontColor={Theme.Colors.white}
          beforeImg={Theme.Icons.yourPublications}
          beforeLeft={"5%"}
          fontSize={"0.875rem"}
        >
          Publications
        </StyledA>
      )}
      {"People".toLowerCase().includes(filterValue.toLowerCase()) && (
      <StyledA
        to="/people"
        paddingTop={"2px"}
        fontColor={Theme.Colors.white}
        beforeImg={Theme.Icons.network}
        beforeLeft={"5%"}
        fontSize={"0.875rem"}
      >
        People
      </StyledA>
      )}
      {"Entities".toLowerCase().includes(filterValue.toLowerCase()) && (
      <StyledA
        to="/entities"
        paddingTop={"2px"}
        fontColor={Theme.Colors.white}
        beforeImg={Theme.Icons.entities}
        beforeLeft={"5%"}
        fontSize={"0.875rem"}
      >
        Entities
      </StyledA>
      )}
      {"Administration".toLowerCase().includes(filterValue.toLowerCase()) && (
      <StyledA
        to="/administration"
        paddingTop={"2px"}
        fontColor={Theme.Colors.white}
        beforeImg={Theme.Icons.administration}
        beforeLeft={"5%"}
        fontSize={"0.875rem"}
      >
        Administration
      </StyledA>
      )}
    </InnerLi>
  );
};

export default Platform;
