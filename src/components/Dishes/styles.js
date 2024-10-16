import styled from "styled-components";

export const DishesCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  position: relative;

  width: 26rem;
  height: 34rem;
  padding: 2.4rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border-radius: 0.8rem;
  border: 1px solid #00070A;

  z-index: -1;

  > svg {
    color: ${({ theme }) => theme.COLORS.WHITE};

    width: 2.4rem;
    height: 2.2rem;
    position: absolute;
    right: 1.6rem;
    top: 1.6rem;
  }

  img {
    width: 12rem;
    height: 12rem;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
      width: 17.6rem;
      height: 17.6rem;
    }
  }

  @media (min-width: 768px) {
    width: 30.4rem;
    height: 46.2rem;
  }
`;

export const DishesText = styled.h1`
  color: ${({ theme }) => theme.COLORS.WHITE};
  text-align: center;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: .2rem;

  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.4rem;

  @media (max-width: 768px) {
    > svg {
      
    }
  }

  @media (min-width: 768px) {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 3.4rem;
  }
`;

export const DishesParagraph = styled.p`
@media (max-width: 768px) {
  display: none;
}

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    font-family: "Roboto", sans-serif;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    width: 26rem;
  }
`;

export const DishesPrice = styled.span`
  color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
  text-align: center;

  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.6rem;

  @media (min-width: 768px) {
    font-size: 3.2rem;
    line-height: 5.2rem;
  }
`;

export const AddItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  > button {
    max-width: 16.2rem;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
    max-width: 20.8rem;
  }
`;