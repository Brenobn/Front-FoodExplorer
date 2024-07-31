import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;

  display: grid;
  grid-template-rows: 11.4rem auto;
  grid-template-areas: 
  "header"
  "content";
`;

export const ContainerOutdoor = styled.div`
  width: 37.6rem;
  height: 12.0rem;

  border-radius: 0.3rem;
  background: linear-gradient(180deg, #091E26 0%, #00131C 100%);

  position: relative;

  > img {
    width: 19.0rem;
    height: 15.0rem;

    top: -3.2rem;
    left: -2.4rem;

    opacity: 0.8;
    position: absolute;

    @media (min-width: 768px) {
      width: 40.0rem;
      height: 28.6rem;

      left: -3.4rem;
      top: -8.8rem;
    }
  }

  @media (max-width: 768px) {
    margin: 4.6rem 4.4rem 6.2rem 5.0rem;
  }

  @media (min-width: 768px) {
    width: 85%;
    height: 20.0rem;

    border-radius: 0.8rem;

    margin: 6.0rem 10.0rem 6.2rem 5.0rem;
  }
`;