import styled from "styled-components";

export const DishesCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  position: relative;

  width: 21.8rem;
  height: 29.2rem;
  padding: 2.4rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border-radius: 0.8rem;
  border: 1px solid #00070A;

  > svg {
    color: ${({ theme }) => theme.COLORS.WHITE};

    width: 2.4rem;
    height: 2.2rem;
    position: absolute;
    right: 1.6rem;
    top: 1.6rem;
  }

  img {
    width: 8.8rem;
    height: 8.8rem;
    justify-content: center;
    align-items: center;
  }
`;

export const DishesParagraph = styled.p`
  color: ${({ theme }) => theme.COLORS.WHITE};
  text-align: center;

  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.4rem;
`;

export const DishesPrice = styled.span`
  color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
  text-align: center;

  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.6rem;
`;