import { BallCardWrapper } from "./Style"

export default function BallCard(props){
    return (
        <BallCardWrapper>
            <div>
                <i class={props.icon}></i>
            </div>
            <h4>{props.title}</h4>
            <p>{props.desc}</p>
        </BallCardWrapper>
    )
}