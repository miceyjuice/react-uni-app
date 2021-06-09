import styled from "styled-components";
import Theme from "../../../styledHelpers/Theme";

export const Wrapper = styled.div`
width: 100%;
display: flex;
justify-content: space-evenly;
margin-bottom: 1rem;
`;
export const AdditionalOption = styled.div`
display: flex;
gap: 1rem;
align-items: center;
padding: 0.5rem 1rem;
border-radius: 0.5rem;
box-shadow: 0 0 0 1px #333;
transition: all 250ms cubic-bezier(0.47, 0, 0.745, 0.715);

:hover {
  cursor: pointer;
  background-color: #222;
}
`;
export const OptionIcon = styled.img`
width: 1rem;
height: 1rem;
`;
export const OptionText = styled.div`
font-size: ${Theme.FontSizes[14]};
font-weight: ${Theme.FontWeights.light};
`;
