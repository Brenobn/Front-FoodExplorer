import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  width: 21.6rem;
  background-color: ${({ theme }) => theme.COLORS.RED};
  color: ${({ theme }) => theme.COLORS.RED};
  color: ${({ theme }) => theme.COLORS.SIMPLE_WHITE};
  font-weight: 500;

  padding: 1.2rem 3.2rem;
  
  border: none;
  border-radius: .5rem;

  &:disabled {
    opacity: 0.5;
  }
  `;