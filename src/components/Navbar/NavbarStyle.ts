import styled from "styled-components";
import Theme from "../../styledHelpers/Theme";

export const SearchIcon = styled.div`
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

export const Icon = styled.div<{ haveBg?: boolean; bgImage: string; bgSize?: string }>`
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

export const DropdownWrapper = styled.div`
  > * {
    color: ${Theme.Colors.red};
  }
`;

export const LeftNav = styled.div`
  display: flex;
  align-items: center;
`;

export const CurrentRoute = styled.div<{beforeImg: string, afterImg: string}>`
  display: inline-flex;
  text-align: left;
  text-decoration: none;
  position: relative;
  min-width: 17rem;
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