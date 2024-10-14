import { FooterContainer } from "./styles";

import Polygon from "../../assets/Polygon.png";

export function Footer() {
  return(
    <FooterContainer>
      <img src={Polygon} alt="Logo do app" />
      <h1>food explorer</h1>
      <p>© 2023 - Todos os direitos reservados.</p>
    </FooterContainer>
  );
}