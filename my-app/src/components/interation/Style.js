import styled from "styled-components";

export const BallCardWrapper = styled.div`
    width: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;

    div{
        background-color: #212121;
        height: 50px;
        width: 50px;
        border-radius: 50%;
        margin: 0 auto;
        font-size: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #00DF5E;
        margin-bottom: 20px;
    }

    h4{
        color: #f9f9f9;
    }
    p{
        margin-top: 3px;
        font-size: 14px;
    }
`