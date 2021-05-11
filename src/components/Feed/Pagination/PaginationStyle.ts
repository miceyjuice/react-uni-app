import styled from "styled-components";
import Theme from "../../../styledHelpers/Theme";

export const Wrapper = styled.div`
    margin-bottom: 5rem;
    margin-top: 1rem;
    width: 100%;
`;
export const PaginationList = styled.ul`
    display: flex;
    list-style-type: none;
    gap: 1rem;
    padding: 0;
    width: 100%;
    justify-content: center;
`;
export const PaginationElement = styled.li<{isActive: boolean}>`
    color: ${({isActive}) => isActive ? Theme.Colors.pink : Theme.Colors.white};
    padding: 0.5rem 0;
    border: 1px solid #444;
    border-radius: 0.5rem;
    background-color: ${({isActive}) => isActive ? '#111' : '#222'};
    min-width: 2.5rem;
    text-align: center;
    transition: color 150ms linear, background-color 200ms ease-in-out;

    :hover{
        cursor: pointer;
        color: ${Theme.Colors.pink};
        background-color: #111;
    }
`;