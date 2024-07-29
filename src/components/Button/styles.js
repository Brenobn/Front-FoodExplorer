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