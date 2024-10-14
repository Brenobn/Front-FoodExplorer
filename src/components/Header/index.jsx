import { useState } from "react";
import { PiReceiptBold, PiSignOutBold } from "react-icons/pi";
import { FiMenu, FiSearch } from "react-icons/fi";
import { FaX } from "react-icons/fa6";

import { Nav, NavContainer, NavMobile, NavDesktop, Logo, InputContainer, MobileMenu } from "./styles";

import { Button } from "../Button";

import Polygon from "../../assets/Polygon.png";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return(
    <>
      <Nav>
        <NavContainer>
          <NavMobile>
            <FiMenu size={32} onClick={toggleMenu} />
          </NavMobile>
          <Logo>
            <img src={Polygon} alt="Logo do app" />
            <h1>food explorer</h1>
          </Logo>
          <NavDesktop>
            <InputContainer>
              <FiSearch size={24} />
              <input
                type="text"
                placeholder="Busque por pratos ou ingredientes"
              />
            </InputContainer>

            <Button icon={PiReceiptBold} title="Pedidos(0)" />
            <PiSignOutBold size={32} />
          </NavDesktop>
          <NavMobile>
            <PiReceiptBold size={32} />
          </NavMobile>
        </NavContainer>
        {menuOpen && (
          <MobileMenu>
            <FaX size={32} onClick={toggleMenu} />
          </MobileMenu>
        )}
      </Nav>
    </>
  );
}