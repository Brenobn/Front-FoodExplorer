import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 10.0rem;
  height: 3.2rem;
  padding: 0.4rem 0;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;
`;

export const NumberOfItens = styled.span`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.6rem;
`;