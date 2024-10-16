import { FooterContainer, LogoContainer } from "./styles";

import GrayPolygon from "../../assets/GrayPolygon.png";

export function Footer() {
  return(
    <FooterContainer>
      <LogoContainer>
        <img src={GrayPolygon} alt="Logo do app" />
        <h1>food explorer</h1>
      </LogoContainer>
      <p>© 2023 - Todos os direitos reservados.</p>
    </FooterContainer>
  );
}