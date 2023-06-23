import styled from 'styled-components'

export const NavWrapper = styled.nav`
    display: flex;

    ul{
        list-style: none;
        display: flex;
        gap: 40px;

        li{
            font-weight: 200;
            font-size: 14px;
            transition: 0.3s;
            cursor: pointer;
            padding: 5px;

            :hover{
                transform: translateY(5px);
                color: #00DF5E;
            }
        }
    }

`