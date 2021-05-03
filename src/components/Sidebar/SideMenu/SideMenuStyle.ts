import styled from "styled-components";

export const Wrapper = styled.div`
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

export const StyledLi = styled.li<{ transparent?: boolean; padding: string }>`
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
