import styled from 'styled-components'

export const HeaderWrapper = styled.header`
    height: 13%;
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    color: #f9f9f9;

    div{
        display:none;
    }
    .logo{
        font-weight: 600;
        font-size: 22px;
    }

    @media(max-width:765px){
        nav ul{
            width: 100%;
            background-color:#171717;
            padding: 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 50px;
            left: -50%;
            transform: translateX(-50%);
            transition: 0.4s;
        }
        div{
            display: flex;
        }

        .actived > ul {
            left: 50%;
            border-bottom-left-radius: 30px;
            border-bottom-right-radius: 30px;
            box-shadow: 0 40px 40px #0000007e;
            border-bottom: 2px solid #19df5b;
        }
    }
`