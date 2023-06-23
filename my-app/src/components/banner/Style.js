import styled from "styled-components";

export const BannerWrapper = styled.section`
    height: auto;
    width: 100%;
    display: flex;
    margin-top: 80px;
    justify-content: space-between;
    
    @media(max-width: 765px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;

        div:nth-child(1){
            width: 100%;
            text-align: center;
        }

        .buttonWrapper{
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 80%;
            margin: 0 auto;
        }

        button{
            width: 80% !important;
        }

        div:nth-child(2){
            margin-top: 50px;
            width: 80%;


        img{
            width: 100%;
            position: relative;
            left: 0;
            user-select: none;
        }
    }
        
    }


    div{
        width: 50%;
    }

    div:nth-child(2){
        display: flex;
        justify-content: flex-end;
        align-items: center;

        img{
            height: 100%;
            user-select: none;
        }
    }

    h1{
        color: #f0f0f0;
        font-size: 35px;
        font-weight: 600;
        margin-top: 15px;
    }

    p{
        color: #828282;
        margin-top: 10px;
    }

    .buttonWrapper{
        margin-top: 20px;
        width: 100%;
        gap: 10px;
        display: flex;

        button{
            width: 130px;
            height: 40px;
            transition: 0.4s;
            cursor: pointer;
             
            i{
                font-size: 17px;
                margin-right: 5px;
            }

            :nth-child(1){
                background-color: #00DF5E;
                border:none;
            }
            :nth-child(1):hover{
                background-color: #018f3c;
                color: white;
            }

            :nth-child(2){
                color: white;
                background-color: transparent;
                border: 1px solid #464646;
            }
            :nth-child(2):hover{
                color: black;
                background-color: white;
            }
        }

    }



`