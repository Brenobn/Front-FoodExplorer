import { DishesCard, DishesParagraph, DishesPrice } from "./styles";

import { AddItem } from "../AddItem";
import { Button } from "../Button";

import { FiHeart } from "react-icons/fi";

import RavanelloImg from "../../assets/Ravanello.png";

export function Dishes() {
  return(
    <DishesCard>
      <FiHeart />
      <img src={RavanelloImg} alt="Foto da refeição" />
      <DishesParagraph>
        Salada Ravanello
      </DishesParagraph>
      <DishesPrice>
        R$ 49,97
      </DishesPrice>
      <AddItem />
      <Button title="incluir" />
    </DishesCard>
  );
}