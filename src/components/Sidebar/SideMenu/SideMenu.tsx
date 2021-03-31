import React from 'react';
import styled from 'styled-components';

import StyledA from "../../../styledHelpers/components/StyledA";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3.125rem;
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  list-style-type: none;
  width: 20.625rem;
  margin: 0;
  padding: 0;
`;

export const StyledLi = styled("li")<{ transparent?: boolean; padding: string }>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: ${({ padding }) => padding};
  max-height: 4rem;
  background-color: ${({ transparent }) =>
    transparent ? "transparent" : "#262525"};
  border-radius: 0.5rem;
`;

const SideMenu = () => {
  return (
    <Wrapper>
    <StyledUl>
          <StyledLi padding={"0.6rem 1.5rem"} transparent>
            <StyledA padding={"3rem"} beforeImg={""}>
              Publications
            </StyledA>
          </StyledLi>
          <StyledLi padding={"0.6rem 1.5rem"} transparent>
            <StyledA padding={"3rem"} beforeImg={""}>
              Ecosystem
            </StyledA>
          </StyledLi>
          <StyledLi padding={"0.6rem 1.5rem"} transparent>
            <StyledA padding={"3rem"} beforeImg={""}>
              Entities
            </StyledA>
          </StyledLi>
        </StyledUl>
    </Wrapper>
  );
}

export default SideMenu;