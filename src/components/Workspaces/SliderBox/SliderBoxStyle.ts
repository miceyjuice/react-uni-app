import { Link } from "react-router-dom";
import styled from "styled-components";
import Theme from "../../../styledHelpers/Theme";

export const Wrapper = styled.div`
  max-width: 100%;
  background-color: ${Theme.Colors.darkGrey};
  position: relative;
  border-radius: 0.5rem;
  color: ${Theme.Colors.white};
  margin-right: 2rem;
`;
export const CategoryImg = styled.img`
  position: absolute;
  top: 5rem;
  left: 1rem;
  width: 5rem;
  max-height: 5rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #444;
  z-index: 100;
`;
export const Top = styled.div<{ bgImg: string }>`
  background-image: ${({ bgImg }) => "url(" + bgImg + ")"};
  background-size: 50%;
  background-position: center;
  height: 8rem;
  border-radius: 0.5rem 0.5rem 0 0;
  filter: invert(40%) grayscale(100%) brightness(60%) sepia(80%)
    hue-rotate(-50deg) saturate(150%) contrast(2);
`;
export const Bottom = styled.div`
  display: flex;
  padding: 0 1rem;
  flex-wrap: wrap;
`;
export const Title = styled(Link)`
  margin: 0;
  padding-left: 7rem;
  flex-basis: 100%;
  margin-top: 0.5rem;
  font-weight: 400;
  text-decoration: none;
  color: ${Theme.Colors.white};
  
  :hover{
    text-decoration: underline;
  }
`;
export const Category = styled.p`
  font-weight: 100;
  font-size: 14px;
  margin-right: 2.5rem;
  margin-bottom: 0.5rem;
  color: #eee;
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 1.5rem;

  ::before,
  ::after {
    content: "";
    display: block;
    position: absolute;
  }

  ::before {
    height: 1rem;
    width: 1rem;
    left: 0;
    background-image: url(${process.env.PUBLIC_URL}${Theme.Icons.contract});
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
  }

  ::after {
    height: 0.1rem;
    width: 0.1rem;
    background-color: #ddd;
    border-radius: 50%;
    right: -1.25rem;
  }
`;
export const Users = styled.p`
  font-weight: 100;
  font-size: 14px;
  margin-bottom: 0.5rem;
  color: #eee;
  position: relative;
  padding-left: 1.5rem;
  display: flex;
  align-items: center;

  ::before {
    content: "";
    display: block;
    position: absolute;
    height: 1rem;
    width: 1rem;
    left: 0;
    background-image: url(${process.env.PUBLIC_URL}${Theme.Icons.network});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
  }
`;
export const Update = styled.p`
  font-weight: 100;
  font-size: 12px;
  flex-basis: 100%;
  color: #ccc;
`;
