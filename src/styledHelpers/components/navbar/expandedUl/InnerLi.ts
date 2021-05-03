import styled from "styled-components";
import Li from "../Li";

export const InnerLi = styled(Li)`
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
text-align: start !important;
height: auto;

> * {
  flex-basis: 100%;
  text-align: unset;
}

a {
  padding: 0.5rem 0 0.5rem 3rem !important;
}
`;