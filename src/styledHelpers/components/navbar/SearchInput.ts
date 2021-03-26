import styled from "styled-components";
import Theme from '../../Theme';

export const SearchInput = styled.input`
padding: 0.5em 3rem;
margin: 0.5em;
background: ${Theme.Colors.black};
border: 1px solid ${Theme.Colors.grey};
border-radius: 0.625rem;
height: 100%;
width: 100%;
max-width: 22.5rem;
font-size: ${Theme.FontSizes[18]};
color: ${Theme.Colors.white};
transition: box-shadow 200ms cubic-bezier(0.47, 0, 0.745, 0.715);

::placeholder {
  color: #757575;
}

:focus {
  outline: none;
  box-shadow: 0 0 2px 1px ${Theme.Colors.pink};
}
`;

export default SearchInput;