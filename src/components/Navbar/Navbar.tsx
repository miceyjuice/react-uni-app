import React, { FC } from "react";
import useDropdown from "react-dropdown-hook";

import Nav from "../../styledHelpers/components/navbar/Nav";
import Logo from "../../styledHelpers/components/Logo";
import Menu from "../../styledHelpers/components/navbar/Menu";
import Search from "../../styledHelpers/components/navbar/Search";
import SearchInput from "../../styledHelpers/components/navbar/SearchInput";
import Icons from "../../styledHelpers/components/Icons";
import ExpandedUl from "./ExpandedUl/ExpandedUl";
import { Theme } from "../../styledHelpers/Theme";
import { Link, useLocation } from "react-router-dom";
import { CurrentRoute, DropdownWrapper, Icon, LeftNav, SearchIcon } from "./NavbarStyle";
import { IUserProps } from '../MainPage/MainPage';


export const NavBar: FC<IUserProps> = ({userId}) => {
  const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

  const GetCurrentRoute = ():string => {
    const location = useLocation();
    if(location.pathname === '/') return 'Home';
    const words = location.pathname.split('/').join('').split('-');
    const result = words[0][0].toUpperCase() + words.join(' ').slice(1);
    return result;
  }

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
                { GetCurrentRoute() }
              </CurrentRoute>
              {dropdownOpen && <ExpandedUl userId={userId} />}
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
