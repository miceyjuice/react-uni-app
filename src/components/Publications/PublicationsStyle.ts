import styled from "styled-components";
import Theme from "../../styledHelpers/Theme";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  min-height: 25rem;
  border-radius: 0.5rem;
  background-color: #262525;
`;

export const MainPublication = styled.div`
  position: relative;
  width: 35%;
  background: #aaa;
  border-radius: 0.5rem 0 0 0.5rem;
  background-image: url('https://via.placeholder.com/600/56a8c2');
  background-position: center;
  background-size: 100%;
`;

export const MainInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 1rem;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(65, 65, 65, 1) 100%
  );
  border-radius: 0 0 0 0.5rem;
`;

export const Content = styled.p`
  flex-basis: 80%;
  margin-bottom: 0;
`;

export const Date = styled.p`
  flex-basis: 30%;
`;

export const Account = styled.div`
  display: flex;
  flex-basis: 70%;
`;

export const AccountImg = styled.img``;

export const AccountInfo = styled.p``;

export const PublicationsBox = styled.div`
  flex-basis: 65%;
  padding: 1rem 2rem;
`;
export const BoxTitle = styled.h3`
  font-size: ${Theme.FontSizes[28]};
  margin: 1rem 0;
  color: ${Theme.Colors.red};
`;
export const PublicationsList = styled.div``;

export const MorePublicationsLink = styled.a`
  font-size: ${Theme.FontSizes[14]};
  color: ${Theme.Colors.pink};
  text-shadow: 0 0 2px ${Theme.Colors.red};
`;
