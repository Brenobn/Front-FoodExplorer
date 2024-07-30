import { HeaderContainer, HeaderItensContainer, LogoText } from "./styles";

import Polygon from "../../assets/Polygon.png";

export function Header() {
  return(
    <HeaderContainer>
      <HeaderItensContainer>
        <LogoText>
          <img src={Polygon} alt="Logo do app" />
          <h1>Food explorer</h1>
        </LogoText>
      </HeaderItensContainer>
    </HeaderContainer>
  );
}