import { Container, ContainerOutdoor } from "./styles";

import { Header } from "../../components/Header";

import Macarrons from "../../assets/Macarrons.png";

export function Home() {
  return(
    <Container>
      <Header />
      <ContainerOutdoor>
        <img src={Macarrons} alt="Imagem de macarrons" />
      </ContainerOutdoor>
    </Container>
  );
}