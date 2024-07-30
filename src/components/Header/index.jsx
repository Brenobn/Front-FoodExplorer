import { PiReceiptBold } from "react-icons/pi";
import { FiMenu } from "react-icons/fi";

import { HeaderContainer, HeaderItensContainer, LogoText } from "./styles";

import Polygon from "../../assets/Polygon.png";

export function Header() {
  return(
    <HeaderContainer>
      <HeaderItensContainer>
        <LogoText>
          <FiMenu size={32}/>
          <img src={Polygon} alt="Logo do app" />
          <h1>Food explorer</h1>
          <PiReceiptBold size={32} />
        </LogoText>
      </HeaderItensContainer>
    </HeaderContainer>
  );
}