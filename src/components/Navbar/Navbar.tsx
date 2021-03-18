import React, { FC } from "react";
import styled from "styled-components";

const Logo = styled.div``;

const Nav = styled.div`
  width: 100%;
  padding: 2rem;
  background-color: #f9f9f9;
`;

const Menu = styled.div``;
const Ul = styled.div``;
const Li = styled.div``;
const Search = styled.div``;
const SearchInput = styled.div``;
const Icons = styled.div``;
const Icon = styled.div``;

export const App: FC = () => {
  return (
    <>
      <Logo>
        <img src="" alt="" />
      </Logo>
      <Menu>
        <Nav>
          <Ul>
            <Li>SOMETHING</Li>
          </Ul>
        </Nav>
      </Menu>
      <Search>
        <SearchInput></SearchInput>
      </Search>
      <Icons>
        <Icon></Icon>
        <Icon></Icon>
        <Icon></Icon>
      </Icons>
    </>
  );
};

export default App;
