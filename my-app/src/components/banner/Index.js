import { BannerWrapper } from "./Style";

export default function Banner(props){
    

    return(
        <BannerWrapper>
            <div>
                <h1>
                    Olá, eu sou o<br/>
                    Jean Charles :)
                </h1>
                <p>Desenvolvedor Full-Stack & UI Designer</p>
                <div className="buttonWrapper">
                    <button><a><i class="fa-brands fa-github"></i>Github</a></button>
                    <button><a><i class="fa-brands fa-linkedin"></i>Linkedin</a></button>
                </div>
            </div>
            <div>
                {props.children}
            </div>
        </BannerWrapper>
    )
}