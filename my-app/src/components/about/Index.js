import { AboutWrapper } from "./Style"

export default function About(props){
    return(
        <AboutWrapper>
            <h2>Sobre mim</h2>
            <p>
                Olá, meu nome é Jean Charles. Moro em São Paulo - SP, 
                sou estudante de desenvolvimento de sistemas front-end e back-end
                focando atualmente em melhorar minhas habilidades em UI Designer para Web
            </p>
            <p>
                Minha jornada iniciou em 2021 em uma escola técnica profissionalizante,
                na qual Java foi minha primeira linguagem em que eu aprendi a lógica de programação 
                e o paradigma OOP.
                Também obtive conhecimentos gerais sobre PHP, Javascript, Java para Mobile e
                SQL Server, MySql, MongoDB como banco de dados.
                O tempo foi passando e o interesse em Javascript aumentou, estou determinado a domina-lo
                e ter fundamentos solidos em ReactJS.
            </p>
            <div className="cardBall">
                {props.children}
            </div>
        </AboutWrapper>
    )
}