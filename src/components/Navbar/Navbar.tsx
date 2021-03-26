import { FC } from "react";
import styled from "styled-components";
import useDropdown from "react-dropdown-hook";

import Nav from "../../styledHelpers/components/navbar/Nav";
import Logo from "../../styledHelpers/components/Logo";
import Menu from "../../styledHelpers/components/navbar/Menu";
import Search from "../../styledHelpers/components/navbar/Search";
import SearchInput from '../../styledHelpers/components/navbar/SearchInput'
import Icons from "../../styledHelpers/components/Icons";
import ExpandedUl from "../../components/Navbar/ExpandedUl";
import StyledA from "../../styledHelpers/components/StyledA";
import { Theme } from "../../styledHelpers/Theme";


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
`;

const Icon = styled("div")<{ haveBg?: boolean; bgImage: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 3rem;
  border-radius: ${(haveBg) => (haveBg ? "50%" : "0px")};
  background-color: ${(props) =>
    props.haveBg ? Theme.Colors.pink : "transparent"};
  background-image: ${(props) => `url('${process.env.PUBLIC_URL}${props.bgImage}')`};
  background-repeat: no-repeat;
  background-position: center;
`;

const DropdownWrapper = styled.div``;

export const NavBar: FC = () => {
  const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

  console.log(`${process.env.PUBLIC_URL}`);

  return (
    <>
      <Nav>
        <Logo></Logo>
        <Menu>
          <DropdownWrapper ref={wrapperRef}>
            <div onClick={toggleDropdown}>
                <StyledA beforeImg={Theme.Icons.home} afterImg={Theme.Icons.dropdown}>
                  Home
                </StyledA>
            </div>
            {dropdownOpen && <ExpandedUl />}
          </DropdownWrapper>
        </Menu>
        <Search>
          <SearchIcon />
          <SearchInput type="text" placeholder="Search Legalcluster" />
        </Search>
        <Icons>
          <Icon bgImage={Theme.Icons.home}></Icon>
          <Icon bgImage={Theme.Icons.comments} haveBg></Icon>
          <Icon bgImage={Theme.Icons.notification} haveBg></Icon>
        </Icons>
      </Nav>
    </>
  );
};

export default NavBar;
