import styled from "styled-components";

export const SectionContainer = styled.section`
  margin: 2.4rem 25.1rem 2rem 2.4rem;
  display: flex;
  justify-content: center;

  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};

    font-family: 'Poppins', sans-serif;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.5rem;
  }

  @media (min-width: 768px) {
    > h2 {
      font-size: 3.2rem;
      line-height: 4.5rem;
    }

    display: flex;
    justify-content: flex-start;
  }
`;