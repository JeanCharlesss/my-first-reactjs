import { ProjectWrapper } from "./Style";

export default function Project(props){
    return(
        <ProjectWrapper>
            <div>

            </div>
            <h4>{props.title}</h4>
            <p>{props.desc}</p>
        </ProjectWrapper>
    )
}