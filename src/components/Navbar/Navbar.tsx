import { FC } from "react";
import styled from "styled-components";

import homeIcon from "../../assets/icons/house.svg";
import dropdownIcon from "../../assets/icons/arrow-down.svg";
import searchIcon from "../../assets/icons/search.svg";
import commentsIcon from "../../assets/icons/comments.svg";
import notificationIcon from "../../assets/icons/bell.svg";

import Nav from "../../styledHelpers/components/Nav";
import Logo from "../../styledHelpers/components/Logo";
import Menu from "../../styledHelpers/components/Menu";
import Search from "../../styledHelpers/components/Search";
import Icons from "../../styledHelpers/components/Icons";
import Ul from "../../styledHelpers/components/Ul";
import Li from "../../styledHelpers/components/Li";
import StyledA from "../../styledHelpers/components/StyledA";
import { Theme } from "../../styledHelpers/Theme";

const SearchInput = styled.input`
  padding: 0.5em 3rem;
  margin: 0.5em;
  background: ${Theme.Colors.black};
  border: 1px solid ${Theme.Colors.grey};
  border-radius: 0.625rem;
  height: 100%;
  width: 100%;
  max-width: 22.5rem;
  font-size: ${Theme.FontSizes[18]};
  color: ${Theme.Colors.white};
  transition: box-shadow 200ms cubic-bezier(0.47, 0, 0.745, 0.715);

  ::placeholder {
    color: #757575;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 2px 1px ${Theme.Colors.pink};
  }
`;

const SearchIcon = styled.div`
  display: block;
  position: absolute;
  height: 100%;
  width: 1.1875rem;
  left: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  background-image: url(${searchIcon});
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
  background-image: ${(props) => `url('${props.bgImage}')`};
  background-repeat: no-repeat;
  background-position: center;
`;

export const App: FC = () => {
  return (
    <>
      <Nav>
        <Logo></Logo>
        <Menu>
          <Ul>
            <Li>
              <StyledA beforeImg={homeIcon} afterImg={dropdownIcon}>
                Home
              </StyledA>
            </Li>
          </Ul>
        </Menu>
        <Search>
          <SearchIcon />
          <SearchInput type="text" placeholder="Search Legalcluster" />
        </Search>
        <Icons>
          <Icon bgImage={homeIcon}></Icon>
          <Icon bgImage={commentsIcon} haveBg></Icon>
          <Icon bgImage={notificationIcon} haveBg></Icon>
        </Icons>
      </Nav>
    </>
  );
};

export default App;
