import React, { FC } from "react";
import styled from "styled-components";
import Theme from "../../../styledHelpers/Theme";
import {
  Bottom,
  Category,
  CategoryImg,
  Title,
  Top,
  Update,
  Users,
  Wrapper,
} from "./SliderBoxStyle";

interface IWorkspaceProps {
  bgImg: string;
  title: string;
  category: string;
  categoryImg: string;
  usersNumber: number;
  lastUpdate: string;
}

export const SliderBox: FC<IWorkspaceProps> = ({
  bgImg,
  title,
  category,
  categoryImg,
  usersNumber,
  lastUpdate,
}) => {
  return (
    <Wrapper>
      <CategoryImg src={process.env.PUBLIC_URL + categoryImg} />
      <Top bgImg={bgImg}></Top>
      <Bottom>
        <Title>{title}</Title>
        <Category>{category}</Category>
        <Users>{usersNumber} users</Users>
        <Update>Last update {lastUpdate} ago</Update>
      </Bottom>
    </Wrapper>
  );
};

export default SliderBox;
