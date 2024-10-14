import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  border-radius: .5rem;

  > svg {
    margin-left: 1.4rem;
  }

  > input {
    width: 100%;
    flex: 1 0 0;
    padding: 1.2rem 1.4rem;

    color: ${({ theme }) => theme.COLORS.SIMPLE_WHITE};
    background: transparent;
    border: none;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`;