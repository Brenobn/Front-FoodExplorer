import { useState } from "react";
import { PiReceiptBold, PiSignOutBold } from "react-icons/pi";
import { FiMenu, FiSearch } from "react-icons/fi";

import { HeaderContainer, HeaderItensContainer, LogoText, DesktopMenu, DesktopMenuItens } from "./styles";

import { Input } from "../Input";
import { Button } from "../Button";

import Polygon from "../../assets/Polygon.png";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

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
      {menuOpen && (
        <DesktopMenu>
          <DesktopMenuItens>
            <div className="text-logo">
              <img src={Polygon} alt="Logo do app" />
              <h1>food explorer</h1>
            </div>
            <Input icon={FiSearch} placeholder="Busque por pratos ou ingredientes" />
            <Button icon={PiReceiptBold} title="Pedidos(0)" />
            <PiSignOutBold />
          </DesktopMenuItens>
        </DesktopMenu>
      )}
    </HeaderContainer>
  );
}