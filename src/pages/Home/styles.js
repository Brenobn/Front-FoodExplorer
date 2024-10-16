import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-width: 136.8rem;
  min-height: 100vh;
  margin: 12rem auto; 

  display: flex;
  flex-direction: column;
  

  @media (max-width: 768px) {
    width: 100%;
    width: 42.8rem;
    margin-top: 16rem;
    padding: 0 4rem;
  } 
`;

export const ContainerOutdoor = styled.div`
  width: 100%;
  max-width: 112.0rem;
  min-height: 26.0rem;
  border-radius: 0.3rem;
  background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;

  > img {
    width: 24.0rem;
    height: 15.0rem;

    top: -3rem;
    left: -2.8rem;

    opacity: 0.8;
    position: absolute;

    @media (min-width: 768px) {
      width: 63.2rem;
      height: 40.6rem;

      left: -7.4rem;
      top: -14.8rem;
    }
  }

  @media (max-width: 768px) {
    width: 40%;
    height: 12rem;
    min-height: auto;
    margin: 4rem 40rem;
    
    padding: 0 8rem;

    h1 {
      font-family: "Poppins", sans-serif;
      font-size: 1.8rem;
      font-style: normal;
      font-weight: 600;
      line-height: 2.5rem;

      color: ${({ theme }) => theme.COLORS.WHITE};

      width: auto;
    }

    p {
      font-family: "Poppins", sans-serif;
      font-size: 1.2rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.7rem;

      color: ${({ theme }) => theme.COLORS.WHITE};

      width: 20rem;
    }

    .text-paragraph {
      padding: 2.0rem 0 2rem 16rem;
    }
  }

  @media (min-width: 768px) {
    min-width: 37.6rem;
    height: 20rem;

    border-radius: 0.8rem;

    margin: 16.0rem auto;

    h1 {
      font-family: "Poppins", sans-serif;
      font-size: 4.0rem;
      font-style: normal;
      font-weight: 500;
      line-height: 5.6rem;

      color: ${({ theme }) => theme.COLORS.WHITE};

      width: 44rem;
    }

    p {
      font-family: "Poppins", sans-serif;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.6rem;
      color: ${({ theme }) => theme.COLORS.WHITE};

      width: 50.0rem;
    }

    > .text-paragraph {
      margin: 8.0rem 10.0rem 11.2rem 60.0rem;
    }
  }
`;

export const DishesContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 2.8rem;
  position: relative;
  padding: 0 4rem;

  margin: 6.2rem 30rem 4.8rem;

  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    margin: 2rem 40rem;
    gap: 7.0rem;
    padding: 0 1rem;
  }
`;

export const ContainerOfContainer = styled.div`
  position: relative;
  overflow: hidden;

  mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 10%,
    rgba(0, 0, 0, 1) 30%,
    rgba(0, 0, 0, 1) 70%,
    rgba(0, 0, 0, 0.5) 90%,
    rgba(0, 0, 0, 0) 100%
  );

  @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const ArrowsContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  padding: 0 26rem;
  pointer-events: none;

  .leftArrow1, .rightArrow1,
  .leftArrow2, .rightArrow2,
  .leftArrow3, .rightArrow3 {
    pointer-events: all;
    font-size: 3.6rem;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    color: ${({ theme }) => theme.COLORS.WHITE};
    z-index: 1;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;