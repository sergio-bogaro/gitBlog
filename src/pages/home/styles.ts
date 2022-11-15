import styled from "styled-components";


export const PostsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    width: 80%;
    margin: auto;

    transition: all 200ms ease-in-out;

    gap: 50px;
`

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 70%;
    margin: 30px auto;

    .TitleContainer {
        display: flex;
        justify-content: space-between;

        margin-bottom: 10px;
    }

    input {
        height: 35px;
        padding-left: 5px;

        border-radius: 6px;
        border: 1px solid #830B2D;
        background: none;
    }

    input::placeholder  {
        color: #5E0820;
    }
`