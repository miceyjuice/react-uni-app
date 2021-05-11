import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import { IState } from "../../reducers";
import { IUsersCommentsReducer } from "../../reducers/usersCommentsReducers";
import { IUsersReducer } from "../../reducers/usersReducers";
import { Wrapper } from "./FeedStyle";
import Pagination from "./Pagination/Pagination";
import { TopBar } from "./TopBar/TopBar";
import WorkList from "./WorkList/WorkList";

export const Feed: FC = () => {
  const { usersCommentsList, usersList } = useSelector<
    IState,
    IUsersCommentsReducer & IUsersReducer
  >((globalState) => ({
    ...globalState.usersCommentsList,
    ...globalState.users,
  }));

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = usersCommentsList
    .slice(0, 79)
    .slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <Wrapper>
      <TopBar />
      <WorkList currentPosts={currentPosts} usersList={usersList} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={usersCommentsList.slice(0, 79).length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </Wrapper>
  );
};

export default Feed;
