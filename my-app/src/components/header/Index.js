import { HeaderWrapper } from "./Style";

export default function Header(props){
    return(
        <HeaderWrapper>
            <a className="logo">Portfólio</a>
            {props.children}
        </HeaderWrapper>
    )
}