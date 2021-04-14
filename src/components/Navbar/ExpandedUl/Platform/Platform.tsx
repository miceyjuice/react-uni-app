import { FC } from "react";
import styled from "styled-components";
import { Li } from "../../../../styledHelpers/components/navbar/Li";
import { StyledA } from "../../../../styledHelpers/components/StyledA";
import Theme from "../../../../styledHelpers/Theme";
import { SectionParagraph } from "../../../../styledHelpers/components/navbar/expandedUl/SectionParagraph";
import { InnerLi } from "../../../../styledHelpers/components/navbar/expandedUl/InnerLi";

export const Platform: FC = () => {
  return (
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
        beforeImg={Theme.Icons.yourPublications}
        beforeLeft={"5%"}
        fontSize={"0.875rem"}
      >
        Publications
      </StyledA>
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
  );
};

export default Platform;
