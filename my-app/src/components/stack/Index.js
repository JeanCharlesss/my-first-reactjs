import { StackWrapper } from "./Style";

export default function Stack(props){
    return(
        <StackWrapper>
            <h2>Skills</h2>
            <div className="skillContainer">
                {props.children}
            </div>
        </StackWrapper>
    )
}