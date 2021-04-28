import React, { FC } from "react";
import styled from "styled-components";
import useDropdown from "react-dropdown-hook";

import Nav from "../../styledHelpers/components/navbar/Nav";
import Logo from "../../styledHelpers/components/Logo";
import Menu from "../../styledHelpers/components/navbar/Menu";
import Search from "../../styledHelpers/components/navbar/Search";
import SearchInput from "../../styledHelpers/components/navbar/SearchInput";
import Icons from "../../styledHelpers/components/Icons";
import ExpandedUl from "./ExpandedUl/ExpandedUl";
import StyledA from "../../styledHelpers/components/StyledA";
import { Theme } from "../../styledHelpers/Theme";
import { Link } from "react-router-dom";

const SearchIcon = styled.div`
  display: block;
  position: absolute;
  height: 100%;
  width: 1.1875rem;
  left: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  background-image: url(${Theme.Icons.search});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 20%;
`;

const Icon = styled.div<{ haveBg?: boolean; bgImage: string; bgSize?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 3rem;
  border-radius: ${(haveBg) => (haveBg ? "50%" : "0px")};
  background-color: ${(props) =>
    props.haveBg ? Theme.Colors.pink : "transparent"};
  background-image: ${(props) =>
    `url('${process.env.PUBLIC_URL}${props.bgImage}')`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: ${({ bgSize }) => (bgSize ? bgSize : "50%")};
`;

const DropdownWrapper = styled.div`
  > * {
    color: ${Theme.Colors.red};
  }
`;

const LeftNav = styled.div`
  display: flex;
  align-items: center;
`;

const CurrentRoute = styled.div<{beforeImg: string, afterImg: string}>`
  display: inline-flex;
  text-align: left;
  text-decoration: none;
  position: relative;
  min-width: 13rem;
  padding: 0 3rem;
  align-items: center;

  :hover{
    cursor: pointer;
  }

  ::before {
    content: "";
    display: block;
    position: absolute;
    height: 100%;
    max-height: 1.56rem;
    width: 1.5rem;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-image: ${(props) => `url('${process.env.PUBLIC_URL}${props.beforeImg}')`};
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  ::after {
    content: "";
    display: ${(props) => (props.afterImg ? "block" : "none")};
    position: absolute;
    height: 100%;
    max-height: 1.56rem;
    width: 0.5rem;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 0; 
    height: 0; 
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid #fff;
  }
`;

export const NavBar: FC = () => {
  const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

  return (
    <React.Fragment>
      <Nav>
        <LeftNav>
          <Logo></Logo>
          <Menu>
            <DropdownWrapper ref={wrapperRef}>
              <CurrentRoute
                onClick={toggleDropdown}
                beforeImg={Theme.Icons.home}
                afterImg={Theme.Icons.dropdown}
              >
                Home
              </CurrentRoute>
              {dropdownOpen && <ExpandedUl />}
            </DropdownWrapper>
          </Menu>
        </LeftNav>
        <Search>
          <SearchIcon />
          <SearchInput type="text" placeholder="Search Legalcluster" />
        </Search>
        <Icons>
          <Link to="/">
            <Icon bgImage={Theme.Icons.home}></Icon>
          </Link>
          <Link to="/comments">
            <Icon bgImage={Theme.Icons.comments} haveBg bgSize={"38%"}></Icon>
          </Link>
          <Link to="/notifications">
            <Icon
              bgImage={Theme.Icons.notification}
              haveBg
              bgSize={"38%"}
            ></Icon>
          </Link>
        </Icons>
      </Nav>
    </React.Fragment>
  );
};

export default NavBar;
