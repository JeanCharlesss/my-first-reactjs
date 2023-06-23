import Header from "../components/header/Index" 
import Navigation from "../components/navigation/Index"
import Main from "../components/main/Index"
import Banner from "../components/banner/Index"
import Background from "../_assets/img/wallpaper.svg"
import About from "../components/about/Index"
import BallCard from "../components/interation/Index"
import Galery from "../components/galery/Index"
import Project from "../components/project/Index"
import Stack from "../components/stack/Index"
import Skill from "../components/skill/Index"
import Footer from "../components/footer/Index"
import MobileButton from "../components/mobile_navigation/Index"
import Work from "../components/work/Index"


import { useState } from "react"
import Task from "../components/task/Index"

export default function Index(){

    const [ativo, setAtivo] = useState(false);

    return (
        <>
            <Header>
                <Navigation active={ativo} list={['Sobre mim','Contato','Projetos','Skills']}/>
                <MobileButton active={ativo} setActive={setAtivo}/>
            </Header>
            <Main>
                <Banner>
                    <img src={Background} alt="wallpaper" draggable="false"/>
                </Banner>
                <About>
                    <BallCard icon={'fa-regular fa-face-smile'} title={'Meu Nome'} desc={'Jean'}/>
                    <BallCard icon={'fa-regular fa-envelope'} title={'E-mail'} desc={'jean.fullstack01@gmail.com'}/>
                    <BallCard icon={'fa-brands fa-discord'} title={'Discord'} desc={'Sayken#0017'}/>
                    <BallCard icon={'fa-brands fa-whatsapp'} title={'Whatsapp'} desc={'(11) 96532-0515'}/>
                </About>
                <Galery>
                    <Project title={'Título do projeto'} desc={'Tecnologias: HTML, CSS, JS, R'}/>
                    <Project title={'Título do projeto'} desc={'Tecnologias: HTML, CSS, JS, R'}/>
                    <Project title={'Título do projeto'} desc={'Tecnologias: HTML, CSS, JS, R'}/>
                    <Project title={'Título do projeto'} desc={'Tecnologias: HTML, CSS, JS, R'}/>
                    <Project title={'Título do projeto'} desc={'Tecnologias: HTML, CSS, JS, R'}/>
                    <Project title={'Título do projeto'} desc={'Tecnologias: HTML, CSS, JS, R'}/>
                </Galery>
                <Work>
                    <Task icon={'fa-solid fa-code'}  desc={'Criação de sites'}/>
                    <Task icon={'fa-brands fa-figma'}  desc={'UI Designer'}/>
                    <Task icon={'fa-solid fa-mobile'}  desc={'Sites responsivos'}/>
                </Work>
                <Stack>
                    <Skill icon={'fa-brands fa-html5'}/>
                    <Skill icon={'fa-brands fa-css3-alt'}/>
                    <Skill icon={'fa-brands fa-js'}/>
                    <Skill icon={'fa-brands fa-react'}/>
                    <Skill icon={'fa-brands fa-php'}/>
                    <Skill icon={'fa-brands fa-java'}/>
                    <Skill icon={'fa-brands fa-node-js'}/>
                    <Skill icon={'fa-brands fa-github'}/>
                    <Skill icon={'fa-brands fa-git-alt'}/>
                    <Skill icon={'fa-brands fa-envira'}/>
                    <Skill icon={'fa-solid fa-database'}/>
                </Stack>
            </Main>
            <Footer/>
        </>
    )
}