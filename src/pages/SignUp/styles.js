import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-width: 42.8rem;
  min-height: 92.6rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  width: 30rem;

  margin: 15.8rem 8.4rem 7.4rem 6.4rem;

  > img {
    width: 4.4rem;
    height: 4.4rem;
  }
`;

export const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 3.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;

  margin: 0 4.6rem 34rem 6.4rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.2rem;
    width: 100%;

    > label {
      font-family: "Roboto", sans-serif;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 400;
      line-height: 2.6rem;
    }

    input {
      display: flex;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_HEADER};
      min-height: 4.8rem;
      width: 100%;
      min-width: 31.6rem;
      border: none;
      padding: 1.2rem 1.4rem;
      gap: 1.4rem;
      align-items: center;
      justify-content: center;
      align-self: stretch;
    }

    button {
      min-width: 31.6rem;
    }

    a {
      color: ${({ theme }) => theme.COLORS.SIMPLE_WHITE};
      text-align: center;
      font-family: "Poppins", sans-serif;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 500;
      line-height: 2.4rem;
    }
  }
`;