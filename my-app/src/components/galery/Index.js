import { GaleryWrapper } from "./Style";

export default function Galery(props){
    return(
        <GaleryWrapper>
            <h2>Projetos</h2>
            <div className="cardBallContainer">
                {props.children}
            </div>
        </GaleryWrapper>

    )
}