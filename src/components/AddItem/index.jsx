import { Container, NumberOfItens } from "./styles";

import { FiMinus, FiPlus } from "react-icons/fi";

export function AddItem() {
  return(
    <Container>
      <FiMinus />
      <NumberOfItens>
        01
      </NumberOfItens>
      <FiPlus />
    </Container>
  );
}