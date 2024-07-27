import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.RED};
  color: ${({ theme }) => theme.COLORS.RED};
  color: ${({ theme }) => theme.COLORS.SIMPLE_WHITE};
  font-weight: 500;

  height: 3.2rem;
  padding: 1.2rem 2.4rem;
  
  border: none;
  border-radius: .5rem;

  &:disabled {
    opacity: 0.5;
  }
  `;

  export const Text = styled.p`
    font-family: "Poppins", sans-serif;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.4rem;

    text-align: center;
  `;