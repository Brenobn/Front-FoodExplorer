import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  height: 4.8rem;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  border-radius: .5rem;

  > svg {
    margin-left: 1.4rem;
  }

  > input {
    height: 4.8rem;
    width: 100%;
    
    padding: 1.2rem 1.4rem;

    color: ${({ theme }) => theme.COLORS.SIMPLE_WHITE};
    background: transparent;
    border: none;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`;