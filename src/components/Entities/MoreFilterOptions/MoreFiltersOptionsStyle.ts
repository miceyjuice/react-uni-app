import styled from "styled-components";
import Theme from "../../../styledHelpers/Theme";

export const Wrapper = styled.div<{ visibility: boolean }>`
  display: ${({ visibility }) => (visibility ? "flex" : "none")};
  flex-wrap: wrap;
  padding: 1rem;
  color: white;
  background-color: #333;
  width: 100%;
  border: 1px solid #444;
  border-radius: 0.5rem;
  margin: 1rem 1rem 0 1rem;
  gap: 1rem;
`;
export const Title = styled.h3`
  flex-basis: 100%;
  margin: 0;
  margin-bottom: 0.5rem;
  font-weight: ${Theme.FontWeights.light};
  font-size: ${Theme.FontSizes[18]};
  color: ${Theme.Colors.red};
`;
export const Row = styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  gap: 2rem;
  font-size: ${Theme.FontSizes[15]};
`;
export const Where = styled.div``;
export const Selector = styled.select<{ customColor?: boolean }>`
  background: transparent;
  border: none;
  color: ${({ customColor }) => (customColor ? Theme.Colors.red : "white")};
  padding-right: 1rem;
  font-size: ${Theme.FontSizes[15]};
`;
export const Option = styled.option``;
export const SearchInput = styled.input`
  background-color: #222;
  border: 1px solid #333;
  border-radius: 0.5rem;
  padding: 0.5rem;
  max-width: 10rem;
  color: ${Theme.Colors.white};

  :focus {
    outline: none;
    box-shadow: 0 0 0 1px #444;
  }
`;

export const AddFilter = styled.button`
  padding: 0.5rem 1.5rem 0.5rem 2.5rem;
  background-color: transparent;
  border: 1px solid ${Theme.Colors.pink};
  border-radius: 0.5rem;
  color: ${Theme.Colors.white};
  display: flex;
  align-items: center;
  position: relative;
  line-height: 25px;

  :hover {
    cursor: pointer;
    background-color: #444;
  }

  ::before {
    content: "";
    display: block;
    width: 1rem;
    height: 1rem;
    background-image: url(${process.env.PUBLIC_URL + Theme.Icons.plus});
    background-size: 100%;
    background-position: 0 0;
    position: absolute;
    left: 1rem;
  }
`;
