import styled from "styled-components";
import Theme from "../Theme";
import { Link } from 'react-router-dom';

export const StyledA = styled(Link)<{beforeImg: string,afterImg?: string,paddingLeft?: string,paddingTop?: string, beforeLeft?: string, fontSize?: string, fontColor?: string}>`
  display: inline-block;
  text-align: left;
  text-decoration: none;
  position: relative;
  padding-left: ${({paddingLeft}) => paddingLeft ? `${paddingLeft} !important` : '0'};
  padding-top: ${({paddingTop}) => paddingTop ? `${paddingTop} !important` : '0'};
  font-size: ${({fontSize}) => fontSize ? fontSize : '1.125rem'};
  min-width: 13rem;
  color: ${(props) => props.fontColor ? props.fontColor : Theme.Colors.red};

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
    left: ${(props) => props.beforeLeft ? props.beforeLeft : '0'};
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

export default StyledA;
