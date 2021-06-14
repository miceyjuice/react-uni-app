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
  currentPosts: ISingleUserComment[];
  usersList: ISingleUser[];
}

export const WorkList: FC<IWorkListProps> = ({ currentPosts, usersList }) => {
  return (
    <Wrapper>
      {currentPosts.map((comment, index) => (
        <Work key={`work${index}`}>
          <WorkTitle key={`worktitle${index}`}>{comment.name}</WorkTitle>
          <Content key={`workcontent${index}`}>{comment.body}</Content>
          <BottomBar key={`workbottombar${index}`}>
            <CompanyName key={`companyname${index}`}>
              {usersList.find((user) => user.id === comment.postId)?.name ||
                `User${Math.floor(Math.random() * 150 + 11)}`}
            </CompanyName>
            <Category key={`workcategory${index}`}>Contract</Category>
            <LastUpdate key={`latestupdate${index}`}>
              Updated 3 days ago by{" "}
              {usersList.find((user) => user.id === comment.postId)?.name ||
                `User${Math.floor(Math.random() * 150 + 11)}`}
            </LastUpdate>
          </BottomBar>
        </Work>
      ))}
    </Wrapper>
  );
};

export default WorkList;
