import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import { IState } from "../../reducers";
import { IUsersCommentsReducer } from "../../reducers/usersCommentsReducers";
import { IUsersReducer } from "../../reducers/usersReducers";
import { Wrapper } from "./FeedStyle";
import Pagination from "./Pagination/Pagination";
import TopBar from "./TopBar/TopBar";
import WorkList from "./WorkList/WorkList";

export const Feed: FC<{ userId: number }> = ({ userId }) => {
  const { usersCommentsList, usersList } = useSelector<
    IState,
    IUsersCommentsReducer & IUsersReducer
  >((globalState) => ({
    ...globalState.usersCommentsList,
    ...globalState.users,
  }));

  const [filterValue, setFilterValue] = useState<string>("");
  const [selectValue, setSelectValue] = useState<string>("All");

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const getNedeedPosts = (maxPosts: number) => {
    if (selectValue === "All")
      return usersCommentsList
        .slice(0, maxPosts - 1)
        .filter((comment) => comment.name.includes(filterValue));
    return usersCommentsList
      .slice(0, maxPosts - 1)
      .filter((comment) => comment.postId === userId + 1)
      .filter((comment) => comment.name.includes(filterValue));
  };

  const currentPosts = getNedeedPosts(80).slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <Wrapper>
      <TopBar
        filterValue={filterValue}
        setFilterValue={setFilterValue}
        selectValue={selectValue}
        setSelectValue={setSelectValue}
        setCurrentPage={setCurrentPage}
      />
      <WorkList currentPosts={currentPosts} usersList={usersList} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={getNedeedPosts(80).length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </Wrapper>
  );
};

export default Feed;
