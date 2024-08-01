import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;

  display: grid;
  grid-template-rows: 11.4rem auto;
  grid-template-areas: 
  "header"
  "content";
`;

export const ContainerOutdoor = styled.div`
  width: 82%;
  height: 12.0rem;


  border-radius: 0.3rem;
  background: linear-gradient(180deg, #091E26 0%, #00131C 100%);

  position: relative;

  > img {
    width: 19.0rem;
    height: 15.8rem;

    top: -4.0rem;
    left: -2.8rem;

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
    margin: 4.4rem 3.2rem 6.2rem 4.0rem;

    h1 {
      font-family: 'Poppins', sans-serif;
      font-size: 1.8rem;
      font-style: normal;
      font-weight: 600;
      line-height: 2.5rem;

      color: ${({ theme }) => theme.COLORS.WHITE};

      width: 22.0rem;
    }

    p {
      font-family: 'Poppins', sans-serif;
      font-size: 1.2rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.7rem;

      color: ${({ theme }) => theme.COLORS.WHITE};

      width: 20.6rem;
    }

    .text-paragraph {
      margin: 3.6rem 1.0rem 2.2rem 18.0rem;
    }
  }

  @media (min-width: 768px) {
    width: 85%;
    height: 20.0rem;

    border-radius: 0.8rem;

    margin: 8.4rem 6.0rem 6.2rem 6.0rem;

    h1 {
      font-family: 'Poppins', sans-serif;
      font-size: 4.0rem;
      font-style: normal;
      font-weight: 500;
      line-height: 5.6rem;

      color: ${({ theme }) => theme.COLORS.WHITE};

      width: 44.0rem;
    }
  
    p {
      font-family: 'Poppins', sans-serif;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.6rem;

      color: ${({ theme }) => theme.COLORS.WHITE};

      width: 47.8rem;
    }
  
    > .text-paragraph {
      margin: 7.0rem .8rem 2.2rem 36.0rem;
    }
  }
`;

export const DishesContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 1.6rem;

  margin-bottom: 3rem;
`;