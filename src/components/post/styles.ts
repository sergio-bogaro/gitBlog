import styled from "styled-components";

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;

    background-color: #FFE7AD;
    border-radius: 10px;

    width: 48%;
    height: 200px;
    padding: 20px;

    a {
        color: #390512;
    }
    
    p {
        overflow: hidden;
        white-space: pre-line;
        text-overflow: ellipsis;
    }
`


export const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    
    justify-content: space-between;
    
`