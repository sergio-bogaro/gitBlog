import styled from "styled-components";

export const PostDataContainer = styled.div` 
    display: flex;

    background-color: #FCD581;

    margin: auto;
    margin-top: -80px;
    border-radius: 10px;

    padding: 20px;
    width: 1000px;
    height: 160px;

    a {
        color: #390512;
        text-decoration: none;

        display: flex;
        align-items: center;
    }

    .profileDataContainer {
        display: flex;
        flex-direction: column;
        width: 100%;

        margin-left: 20px;

        .nameContainer {
            display: flex;
            width: 100%;
            justify-content: space-between;

            margin-bottom: 15px;

            p {
                font-size: 23px;
            }

            button {
                background: transparent;
                border: transparent;

                display: flex;
                align-items: center;

                font-weight: 600;
            }
        }

        .profilleInformations {
            display: flex;
            gap: 20px;
            flex-direction: row;

            align-content: center;

            p {
                font-size: 17px;
                
                display: flex;
                align-items: center;
                gap: 3px;
            }
        }
    }
    
`

export const PostContainter = styled.div`
    display: flex;
    width: 55%;

    margin: 30px auto;
`