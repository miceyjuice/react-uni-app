import React, { FC } from "react";
import { ISingleUser, ISingleUserComment } from "../../../entities/users";
import {
  BottomBar,
  Category,
  CompanyName,
  Content,
  LastUpdate,
  Work,
  WorkTitle,
  Wrapper,
} from "./WorkListStyle";

interface IWorkListProps {
    currentPosts: ISingleUserComment[],
    usersList: ISingleUser[]
}

export const WorkList: FC<IWorkListProps> = ({currentPosts, usersList}) => {
  return (
    <Wrapper>
      {currentPosts.map((comment) => (
        <Work>
          <WorkTitle>{comment.name}</WorkTitle>
          <Content>{comment.body}</Content>
          <BottomBar>
            <CompanyName>Subsid. corp</CompanyName>
            <Category>Contract</Category>
            <LastUpdate>
              Updated 3 days ago by{" "}
              {usersList.find((user) => user.id === comment.postId)?.name}
            </LastUpdate>
          </BottomBar>
        </Work>
      ))}
    </Wrapper>
  );
};

export default WorkList;
