import { MainWrapper } from "./Style"

export default function Main(props){
    return(
        <MainWrapper>
            {props.children}
        </MainWrapper>
    )
}