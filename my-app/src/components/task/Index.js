import { TaskWrapper } from "./Style";

export default function Task(props){
    return (
        <TaskWrapper>
            <i className={props.icon}></i>
            <p>{props.desc}</p>
        </TaskWrapper>
    )
}