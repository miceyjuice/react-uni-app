import styled from "styled-components";
import Theme from "../../styledHelpers/Theme";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 2rem;
`;
export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const Title = styled.h3`
  color: ${Theme.Colors.red};
`;
export const Options = styled.div`
  display: flex;
  gap: 2rem;
`;

export const SelectionWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  ::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    width: 1rem;
    height: 1rem;
    background-image: url(${process.env.PUBLIC_URL + Theme.Icons.signal});
  }
`;

export const Selection = styled.select`
  background-color: transparent;
  color: ${Theme.Colors.white};
  border: none;
  padding-left: 1.5rem;

  :hover{
    cursor: pointer;
  }
`;
export const Option = styled.option``;