import styled from "styled-components";

export const SectionContainer = styled.section`
  margin: 10.2rem 30.0rem 114.6rem -1rem;

  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};

    font-family: 'Poppins', sans-serif;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.5rem;
  }
`;