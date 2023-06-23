import { NavWrapper } from "./Style"

export default function Navigation(props){

    return(
        <NavWrapper className={props.active?'actived':''}>
            <ul>
                {props.list.map((item)=>
                    <li><a>{item}</a></li>
                )}
            </ul>
        </NavWrapper>
    )
}