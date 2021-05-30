import styled from "styled-components";
import Theme from "../Theme";
import { Link } from "react-router-dom";

export const StyledA = styled(Link)<{
  beforeimg: string;
  afterimg?: string;
  paddingleft?: string;
  paddingtop?: string;
  beforeleft?: string;
  fontsize?: string;
  fontcolor?: string;
}>`
  display: inline-block;
  text-align: left;
  text-decoration: none;
  position: relative;
  padding-left: ${({ paddingleft }) =>
    paddingleft ? `${paddingleft} !important` : "0"};
  padding-top: ${({ paddingtop }) =>
    paddingtop ? `${paddingtop} !important` : "0"};
  font-size: ${({ fontsize }) => (fontsize ? fontsize : "1.125rem")};
  min-width: 13rem;
  color: ${(props) => (props.fontcolor ? props.fontcolor : Theme.Colors.red)};

  :hover {
    cursor: pointer;
  }

  ::before {
    content: "";
    display: block;
    position: absolute;
    height: 100%;
    max-height: 1.56rem;
    width: 1.5rem;
    left: ${(props) => (props.beforeleft ? props.beforeleft : "0")};
    top: 50%;
    transform: translateY(-50%);
    background-image: ${({ beforeimg }) =>
      `url('${process.env.PUBLIC_URL}${beforeimg}')`};
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  ::after {
    content: "";
    display: ${(props) => (props.afterimg ? "block" : "none")};
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

export default StyledA;
