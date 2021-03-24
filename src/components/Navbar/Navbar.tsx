import React, { FC } from "react";
import styled from "styled-components";

import Theme from "../../styledHelpers/Theme";
import homeIcon from "../../assets/icons/house.png";

import Nav from "../../styledHelpers/components/Nav";
import Logo from "../../styledHelpers/components/Logo";
import Menu from "../../styledHelpers/components/Menu";
import Search from "../../styledHelpers/components/Search";
import Icons from "../../styledHelpers/components/Icons";
import Ul from "../../styledHelpers/components/Ul";
import Li from "../../styledHelpers/components/Li";

const StyledA = styled.a`
  display: inline-block;
  text-align: center;
  text-decoration: none;
  position: relative;

  ::before {
    content: "";
    display: block;
    position: absolute;
    height: 100%;
    width: 1.5rem;
    left: -3rem;
    top: 0;
    background-image: url(${homeIcon});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export const App: FC = () => {
  return (
    <>
      <Nav>
        <Logo></Logo>
        <Menu>
          <Ul>
            <Li>
              <StyledA>Home</StyledA>
            </Li>
          </Ul>
        </Menu>
        <Search></Search>
        <Icons></Icons>
      </Nav>
    </>
  );
};

export default App;
