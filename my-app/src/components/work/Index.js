import { WorkWrapper } from "./Style";

export default function Services(props){
    return(
        <WorkWrapper>
            <h2>Serviços</h2>
            <div className="taskContainer">
                {props.children}
            </div>
        </WorkWrapper>
    )
}