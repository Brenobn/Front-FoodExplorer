import { DishesCard, DishesText, DishesPrice, DishesParagraph, AddItemContainer } from "./styles";

import { PiCaretRight } from "react-icons/pi";

import { AddItem } from "../AddItem";
import { Button } from "../Button";

import { FiHeart } from "react-icons/fi";

import RavanelloImg from "../../assets/Ravanello.png";

export function Dishes() {
  return(
    <DishesCard>
      <FiHeart />
      <img src={RavanelloImg} alt="Foto da refeição" />
      <DishesText>
        Salada Ravanello
        <PiCaretRight />
      </DishesText>
      <DishesParagraph>
        Massa fresca com camarões e pesto. 
      </DishesParagraph>
      <DishesPrice>
        R$ 49,97
      </DishesPrice>
      <AddItemContainer>
        <AddItem />
        <Button title="incluir" />
      </AddItemContainer>
    </DishesCard>
  );
}