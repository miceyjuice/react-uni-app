import React, { FC } from "react";
import { Theme } from "../../../styledHelpers/Theme";

import StyledA from "../../../styledHelpers/components/StyledA";
import { StyledLi, StyledUl, Wrapper } from "./SideMenuStyle";


const SideMenu: FC = () => {
  return (
    <Wrapper>
      <StyledUl>
        <StyledLi padding={"0.6rem 1.5rem"} transparent>
          <StyledA
            to="/publications"
            paddingLeft={"3rem"}
            beforeImg={Theme.Icons.yourPublications}
          >
            Publications
          </StyledA>
        </StyledLi>
        <StyledLi padding={"0.6rem 1.5rem"} transparent>
          <StyledA
            to="/ecosystem"
            paddingLeft={"3rem"}
            beforeImg={Theme.Icons.ecosystem}
          >
            Ecosystem
          </StyledA>
        </StyledLi>
        <StyledLi padding={"0.6rem 1.5rem"} transparent>
          <StyledA
            to="/entities"
            paddingLeft={"3rem"}
            beforeImg={Theme.Icons.entities}
          >
            Entities
          </StyledA>
        </StyledLi>
      </StyledUl>
    </Wrapper>
  );
};

export default SideMenu;
