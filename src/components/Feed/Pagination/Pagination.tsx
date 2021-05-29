import React, { FC } from "react";
import { PaginationElement, PaginationList, Wrapper } from "./PaginationStyle";

interface IPostsProps {
    postsPerPage: number;
    totalPosts: number;
    paginate: Function,
    currentPage: number
}

export const Pagination: FC<IPostsProps> = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
    const pageNumbers = [];
    let isCurrent: boolean = true;

    for ( let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }

  return (
    <Wrapper>
        <PaginationList>
            {pageNumbers.map( (pageNumber, index) => {
                { isCurrent = pageNumber === currentPage ? true : false }
                return (
                <PaginationElement key={`pagination${index}`} isActive={isCurrent} onClick={() => paginate(pageNumber)}>
                    { pageNumber }
                </PaginationElement>
            )})}
        </PaginationList>
    </Wrapper>
  );
};

export default Pagination;