import { Header } from "../../components/Header"
import imagem from '../../assets/Imagem.png';
import { IntroContainer, IntroTextContainer } from "./components/Intro/styles";
import { CoffeeListDiv, CoffeeListTextContainer } from "./components/CoffeeList/styles";


export function Home ()
{
    return (
        <>
        <Header />
        <IntroContainer>
            <IntroTextContainer>
                <h2>Encontre o café perfeito para qualquer hora do dia</h2>
                <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
            </IntroTextContainer>
            <img src= {imagem} />
        </IntroContainer>

        <CoffeeListDiv>
            <CoffeeListTextContainer>
                <h2>Nossos cafés</h2>
            </CoffeeListTextContainer>

        </CoffeeListDiv>
        
        </>
    );
}