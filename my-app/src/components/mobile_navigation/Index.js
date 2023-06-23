import { ButtonWrapper } from "./Style";

export default function MobileButton(props){
    return(
        <ButtonWrapper>
            <button onClick={()=>(props.setActive(!props.active))}>
                <i className={props.active?'fa-solid fa-xmark':'fa-solid fa-bars'}></i>
            </button>
        </ButtonWrapper>
    )
}