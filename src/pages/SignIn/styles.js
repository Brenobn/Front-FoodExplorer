import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 136.8rem;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  margin: 0 auto;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  overflow: hidden;

  @media (min-width: 768px) {
    height: 100vh;
  }

  .largerScreen {
    @media (min-width: 768px) {
      display: flex;
      flex-direction: row;
      gap: clamp(1rem, 6vw, 20rem);
    }
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  width: 30rem;

  margin: 32rem 8.4rem 7.4rem 6.4rem;

  @media (min-width: 768px) {
    width: 42rem;
    gap: 1.8rem;

    margin: 20rem 0 30rem 6rem;
  }

  > img {
    width: 3.8rem;
    height: 3.8rem;

    @media (min-width: 768px) {
      width: 4.2rem;
      height: 4.2rem;
    }
  }
`;

export const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 3.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (min-width: 768px) {
    font-size: 4.2rem;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;

  margin: 0 4.6rem 34rem 6.4rem;

  @media (min-width: 768px) {
    margin: 4rem 10rem 4rem 0;
    border-radius: 1.6rem;
    width: clamp(10rem, 50vw, 47rem);
    min-height: 47.8rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.2rem;
    width: 50%;

    > h2 {
      color: ${({ theme }) => theme.COLORS.SIMPLE_WHITE};
      text-align: center;
      font-family: "Poppins", sans-serif;
      font-size: 3.2rem;
      font-style: normal;
      font-weight: 500;
      line-height: 4.4rem;
      width: 34.8rem;

      @media (max-width: 768px) {
        display: none;
      }
    }

    > label {
      font-family: "Roboto", sans-serif;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 400;
      line-height: 2.6rem;
    }

    input {
      display: flex;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
      height: 4.8rem;
      width: 31.6rem;
      border: none;
      padding: 1.2rem 1.4rem;
      gap: 1.4rem;
      align-items: center;
      justify-content: center;

      @media (min-width: 768px) {
        width: clamp(10rem, 40vw, 31.6rem);
      }
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

    @media (min-width: 768px) {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_HEADER};

      min-width: 47.6rem;
      min-height: 54rem;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 6.4rem;
      border-radius: 1.6rem;
    }
  }
`;