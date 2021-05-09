import styled from "styled-components";
import Theme from "../../../styledHelpers/Theme";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: fit-content;
  color: ${Theme.Colors.white};
  padding-top: 0.5rem;
`;

export const LeftBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: ${Theme.FontWeights.light};
  font-size: ${Theme.FontSizes[14]};

  > *:hover{
    cursor: pointer;
  }
`;

export const All = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1.5rem;
  position: relative;
  min-width: 5rem;
  border: 1px solid #222;
  border-radius: 0.5rem;
  background-color: #333;
  padding: 0.5rem 2rem;
  margin-left: 1rem;

  :hover {
    cursor: pointer;
  }

  ::before,
  ::after {
    content: "";
    display: block;
    position: absolute;
  }
  ::before {
    left: 0.5rem;
    background-image: url(${process.env.PUBLIC_URL + Theme.Icons.all});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    width: 1rem;
    height: 1rem;
  }
  ::after {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #fff;
    right: 0.5rem;
  }
`;
export const MoreOptions = styled.img`
  width: 2.2rem;
  height: 1.5rem;
  border-right: 1px solid #444;
  padding-right: 1rem;

`;
export const Sort = styled.div`
  padding-left: 1.5rem;
  position: relative;

  ::before{
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-image: url(${process.env.PUBLIC_URL + Theme.Icons.sort});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    width: 1rem;
    height: 1rem;
  }
`;
export const Filters = styled.div`
  padding-left: 1.5rem;
  display: flex;
  align-items: center;
  position: relative;
  border-right: 1px solid #444;
  padding-right: 1rem;
  height: 1.5rem;

  ::before{
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-image: url(${process.env.PUBLIC_URL + Theme.Icons.filter});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    width: 0.9rem;
    height: 0.9rem;
  }
`;
export const Resize = styled.img`
  width: 2rem;
  height: 1.5rem;
  border-right: 1px solid #444;
  padding-right: 1rem;
`;
export const Share = styled.div`
  position: relative;
  padding-left: 1.5rem;

  ::before{
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-image: url(${process.env.PUBLIC_URL + Theme.Icons.share});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    width: 1rem;
    height: 1rem;
  }
`;

export const RightBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: ${Theme.FontSizes[14]};
`;

export const Search = styled.div`
  position: relative;
`;
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
export const SearchIcon = styled.img`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  max-width: 1rem;
  filter: opacity(50%);
`;
export const Filter = styled.div`
  border: 1px solid #444;
  border-radius: 0.5rem;
  padding: 0.5rem 2rem;
  font-weight: ${Theme.FontWeights.light};
  position: relative;
  margin-right: 1rem;

  :hover{
    cursor: pointer;
    background-color: #333;
  }

  ::before,
  ::after{
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::before {
    left: 0.5rem;
    background-image: url(${process.env.PUBLIC_URL + Theme.Icons.signal});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    width: 1rem;
    height: 1rem;
  }

  ::after {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #fff;
    right: 0.5rem;
  }
`;