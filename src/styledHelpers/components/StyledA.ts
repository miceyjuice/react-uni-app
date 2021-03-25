import styled from "styled-components";

export const StyledA = styled("a")<{beforeImg: string,afterImg?: string,padding?: string}>`
  display: inline-block;
  text-align: center;
  text-decoration: none;
  position: relative;
  padding-left: ${({padding}) => padding ? padding : '0'};

  ::before {
    content: "";
    display: block;
    position: absolute;
    height: 100%;
    max-height: 1.56rem;
    width: 1.5rem;
    left: -3rem;
    top: 0;
    background-image: ${(props) => `url('${props.beforeImg}')`};
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
    right: -5rem;
    top: 0;
    background-image: ${(props) => `url('${props.afterImg}')`};
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export default StyledA;
