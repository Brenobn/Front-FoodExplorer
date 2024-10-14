import { useEffect, useRef } from "react";
import { Container, ContainerOutdoor, DishesContainer, ContainerOfContainer, ArrowsContainer } from "./styles";

import { PiCaretRight, PiCaretLeft } from "react-icons/pi";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Dishes } from "../../components/Dishes";

import Macarrons from "../../assets/Macarrons.png";

export function Home() {
  const dishesRef1 = useRef(null);
  const dishesRef2 = useRef(null);
  const dishesRef3 = useRef(null);

  useEffect(() => {
    const handleScroll = (scrollContainer, direction) => {
      if (direction === "right") {
        scrollContainer.scrollLeft += 300;
      } else {
        scrollContainer.scrollLeft -= 300;
      }
    };

    const setupArrows = (ref, leftArrowClass, rightArrowClass) => {
      const scrollContainer = ref.current;
      const rightArrow = document.querySelector(`.${rightArrowClass}`);
      const leftArrow = document.querySelector(`.${leftArrowClass}`);

      rightArrow.addEventListener("click", () => handleScroll(scrollContainer, "right"));
      leftArrow.addEventListener("click", () => handleScroll(scrollContainer, "left"));

      return () => {
        rightArrow.removeEventListener("click", () => {});
        leftArrow.removeEventListener("click", () => {});
      };
    };

    const cleanup1 = setupArrows(dishesRef1, "leftArrow1", "rightArrow1");
    const cleanup2 = setupArrows(dishesRef2, "leftArrow2", "rightArrow2");
    const cleanup3 = setupArrows(dishesRef3, "leftArrow3", "rightArrow3");

    return () => {
      cleanup1();
      cleanup2();
      cleanup3();
    }
  }, []);

  return(
    <>
      <Header />
        <Container>
          <ContainerOutdoor>
            <img src={Macarrons} alt="Imagem de macarrons" />
            <div className="text-paragraph">
              <h1>Sabores inigualáveis</h1>
              <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </div>
          </ContainerOutdoor>
          <Section title="Refeições" />
          <ContainerOfContainer>
            <ArrowsContainer>
              <PiCaretLeft  className="leftArrow1" />
              <PiCaretRight className="rightArrow1"  />
            </ArrowsContainer>
            <DishesContainer ref={dishesRef1} >
              <Dishes />
              <Dishes />
              <Dishes />
              <Dishes />
              <Dishes />
              <Dishes />
            </DishesContainer>
          </ContainerOfContainer>
          <Section title="Sobremesas" />
          <ContainerOfContainer>
            <ArrowsContainer>
              <PiCaretLeft  className="leftArrow2" />
              <PiCaretRight className="rightArrow2"  />
            </ArrowsContainer>
            <DishesContainer ref={dishesRef2}>
              <Dishes />
              <Dishes />
              <Dishes />
              <Dishes />
              <Dishes />
              <Dishes />
              <Dishes />
              <Dishes />
            </DishesContainer>
          </ContainerOfContainer>
          <Section title="Bebidas" />
          <ContainerOfContainer>
          <ArrowsContainer>
            <PiCaretLeft  className="leftArrow3" />
            <PiCaretRight className="rightArrow3"  />
          </ArrowsContainer>
            <DishesContainer ref={dishesRef3}>
              <Dishes />
              <Dishes />
              <Dishes />
              <Dishes />
              <Dishes />
              <Dishes />
              <Dishes />
            </DishesContainer>
          </ContainerOfContainer>
        </Container>
    </>
  );
}