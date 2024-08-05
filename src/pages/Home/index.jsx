import { Container, ContainerOutdoor, DishesContainer } from "./styles";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Dishes } from "../../components/Dishes";

import Macarrons from "../../assets/Macarrons.png";

export function Home() {
  return(
    <Container>
      <Header />
      <ContainerOutdoor>
        <img src={Macarrons} alt="Imagem de macarrons" />
        <div className="text-paragraph">
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </div>
      </ContainerOutdoor>
      <Section title="Refeições" />
      <DishesContainer>
        <Dishes />
        <Dishes />
      </DishesContainer>
      <Section title="Sobremesas" />
      <DishesContainer>
        <Dishes />
        <Dishes />
      </DishesContainer>
      <Section title="Bebidas" />
      <DishesContainer>
        <Dishes />
        <Dishes />
      </DishesContainer>
    </Container>
  );
}